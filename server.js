import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app=express(), PORT=process.env.PORT||3000;
app.use(express.json({limit:"1mb"}));
app.use(express.static("public"));

const API="https://api.search.brave.com/res/v1";
const headers=()=>({"Accept":"application/json","Accept-Encoding":"gzip","X-Subscription-Token":process.env.BRAVE_API_KEY});

function clean(v,max=400){return String(v||"").trim().slice(0,max)}
function urlFor(type,q,count=20,offset=0){
  const base= type==="news"?`${API}/news/search`:type==="images"?`${API}/images/search`:type==="videos"?`${API}/videos/search`:type==="places"?`${API}/local/place_search`:`${API}/web/search`;
  const p=new URLSearchParams({q,count:String(count),offset:String(offset),country:"IN",search_lang:"en",safesearch:"moderate"});
  return `${base}?${p}`;
}

app.get("/api/config",(req,res)=>res.json({liveSearch:Boolean(process.env.BRAVE_API_KEY),ai:Boolean(process.env.AI_API_URL&&process.env.AI_API_KEY)}));

app.get("/api/suggest",async(req,res)=>{
  const q=clean(req.query.q,100);
  if(!q||!process.env.BRAVE_API_KEY) return res.json({results:[]});
  try{
    const u=`${API}/suggest/search?q=${encodeURIComponent(q)}&count=8`;
    const r=await fetch(u,{headers:headers()}); const d=await r.json();
    res.json({results:(d.results||d.suggestions||[]).map(x=>typeof x==="string"?x:x.query||x.title).filter(Boolean).slice(0,8)});
  }catch{res.json({results:[]})}
});

app.get("/api/search",async(req,res)=>{
  const q=clean(req.query.q), type=clean(req.query.type,20)||"web";
  const page=Math.max(0,Math.min(9,Number(req.query.page)||0));
  if(!q) return res.status(400).json({error:"Query required"});
  if(!process.env.BRAVE_API_KEY){
    return res.json({live:false,type,query:q,page,results:[],message:"Add BRAVE_API_KEY to enable live search."});
  }
  try{
    const r=await fetch(urlFor(type,q,20,page),{headers:headers()});
    if(!r.ok) throw new Error(`Provider ${r.status}`);
    const d=await r.json();
    res.json({live:true,type,query:q,page,data:d});
  }catch(e){res.status(502).json({error:"Search provider unavailable",detail:e.message})}
});

app.post("/api/ai",async(req,res)=>{
  const q=clean(req.body?.q);
  if(!q) return res.status(400).json({error:"Query required"});
  if(!process.env.AI_API_URL||!process.env.AI_API_KEY)
    return res.json({enabled:false,message:"AI endpoint is not configured. Nova can still search the web."});
  try{
    const r=await fetch(process.env.AI_API_URL,{method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${process.env.AI_API_KEY}`},body:JSON.stringify({query:q})});
    const d=await r.json(); res.json({enabled:true,data:d});
  }catch(e){res.status(502).json({error:"AI service unavailable"})}
});

app.get("*",(req,res)=>res.sendFile(process.cwd()+"/public/index.html"));
app.listen(PORT,()=>console.log(`Nova Search: http://localhost:${PORT}`));
