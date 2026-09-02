# Nova Search 🚀

Nova Search is a modern, responsive search-engine interface with an Express backend and optional Brave Search API integration.

## Features

- 🔎 Web search
- 🖼️ Image search
- 🎬 Video search
- 📰 News search
- 📍 Places search
- 💡 Search suggestions
- 🎙️ Voice search when supported by the browser
- 🕘 Local search history
- 🌙 Dark/light mode
- 📄 Pagination
- 🧠 Optional server-side AI endpoint
- 🔐 API keys kept on the server
- 📱 Responsive design

## Run locally

```bash
npm install
cp .env.example .env
npm start
```

Open `http://localhost:3000`.

Set `BRAVE_API_KEY` in `.env` to enable live search. Never commit `.env` or expose API keys in frontend code.

## Deployment

The complete app requires a Node/Express-capable host for the backend. GitHub Pages can host only the static frontend and cannot run the Node backend or securely store the private search API key.

See [DEPLOYMENT.md](DEPLOYMENT.md) for details.

## Project structure

```text
nova-search/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
├── package.json
├── .env.example
├── .gitignore
├── DEPLOYMENT.md
└── LICENSE
```

## License

MIT
