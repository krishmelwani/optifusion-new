// api/proxy.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi everyone on my server');
});

app.post("/proxy", async (req, res) => {
  const googleURL = process.env.VITE_GOOGLESHEETURL;
  try {
    const response = await fetch(googleURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    try {
      const json = JSON.parse(text);
      res.json(json);
    } catch {
      res.status(200).send(text);
    }
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", details: err.message });
  }
});

// // ✅ Start server locally
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// export default app (no app.listen!)
export default app;
