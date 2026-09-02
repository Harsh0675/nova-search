# Nova Search deployment

## Local
1. Install Node.js 18+.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Put your Brave Search API key in `BRAVE_API_KEY`.
5. Run `npm start`.
6. Open http://localhost:3000.

## Production
Deploy the Node/Express app to a Node-capable hosting service. Set environment variables there.

**Important:** do not put `BRAVE_API_KEY` in `public/app.js`, HTML, or any public GitHub file. Brave's documentation explicitly says API keys must stay confidential and never be exposed client-side. The API provides dedicated web, image, video, news, place, suggestion and AI-related endpoints, which Nova routes through its backend.

## GitHub Pages
GitHub Pages is suitable for the static frontend, but not for this Node backend/private API key. For the full live version, host the backend separately and configure the frontend API base URL for that backend.

## Architecture
Browser → Nova Express API → Search provider
                         ↘ optional AI provider

The included application is a complete portfolio-grade search UI and backend integration, but it is not a Google-scale independent crawler/index. Building an independent global index requires distributed crawling, storage, deduplication, ranking, scheduling and substantial infrastructure.
