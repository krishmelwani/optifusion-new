import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.post("/proxy", async (req, res) => {
  const googleURL = process.env.VITE_GOOGLESHEETURL;
  try {
    const response = await fetch(googleURL, {
      method: "POST",   
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    // Try to parse JSON; if not JSON, just return raw text
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

app.listen(3000, () => console.log("SERVER running on 3000"));
