const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Azure CI/CD Pipeline</title>

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: Arial, sans-serif;
            color: white;
            background:
              radial-gradient(circle at top left, #4f46e5, transparent 45%),
              radial-gradient(circle at bottom right, #0891b2, transparent 45%),
              #0f172a;
          }

          .card {
            width: min(90%, 620px);
            padding: 48px;
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(12px);
          }

          .badge {
            display: inline-block;
            padding: 8px 14px;
            border-radius: 999px;
            color: #bbf7d0;
            background: rgba(34, 197, 94, 0.18);
            font-size: 14px;
            font-weight: bold;
          }

          h1 {
            margin: 22px 0 14px;
            font-size: clamp(2rem, 5vw, 3.5rem);
          }

          p {
            margin: 0 auto 28px;
            max-width: 480px;
            color: #cbd5e1;
            font-size: 1.1rem;
            line-height: 1.7;
          }

          a {
            display: inline-block;
            padding: 13px 20px;
            border-radius: 10px;
            color: white;
            background: #2563eb;
            text-decoration: none;
            font-weight: bold;
            transition: 0.2s ease;
          }

          a:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
          }

          footer {
            margin-top: 30px;
            color: #94a3b8;
            font-size: 14px;
          }
        </style>
      </head>

      <body>
        <main class="card">
          <span class="badge">● Deployment Active</span>

          <h1>Azure CI/CD Pipeline 🚀</h1>

          <p>
            Your Express application is running successfully through an
            automated Azure CI/CD pipeline.
          </p>

          <a href="/health">Check Service Health</a>

          <footer>
            Built with Node.js, Express, Docker & Azure
          </footer>
        </main>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "Azure CI/CD Application",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
