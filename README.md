# 🚀 Nova Search

A modern, responsive search engine interface with an **Express.js backend** and optional **Brave Search API** integration.

[![Live Search](https://img.shields.io/badge/Search-Nova%20Search-7c3aed)](#-features)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green)](https://nodejs.org/)
[![Brave Search](https://img.shields.io/badge/API-Brave%20Search-orange)](https://brave.com/search/api/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

## ✨ Features

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
- 🔐 API keys kept securely on the server
- 📱 Responsive design

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API server |
| HTML5 | Frontend structure |
| CSS3 | Responsive styling |
| JavaScript | Search UI and interactions |
| Brave Search API | Optional live search provider |

## 🔍 Search Capabilities

Nova Search provides one interface for multiple search types:

**Web · Images · Videos · News · Places · Suggestions**

## ⚙️ Run Locally

```bash
git clone https://github.com/Harsh0675/nova-search.git
cd nova-search
npm install
cp .env.example .env
npm start
```

Open:

```text
http://localhost:3000
```

### Environment Variable

To enable live Brave Search results, configure:

```text
BRAVE_API_KEY=your_api_key
```

Never commit `.env` or expose private API keys in frontend code.

## ☁️ Deployment

Nova Search requires a Node.js/Express-capable hosting platform for the complete application. GitHub Pages can host the static frontend but cannot run the Node.js backend or securely store a private search API key.

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for deployment instructions.

## 📁 Project Structure

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

## 🔐 Security

API credentials are intended to remain server-side. Use environment variables for secrets and never commit real credentials to GitHub.

## 📄 License

MIT License

## 👨‍💻 Author

**Harsh**

GitHub: https://github.com/Harsh0675
