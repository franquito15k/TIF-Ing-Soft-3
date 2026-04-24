const path = require("path");
const express = require("express");
const {
  isValidUrl,
  summarizeRisk,
  formatFileSize,
  clamp,
  scoreToLabel
} = require("./utils");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "2mb" }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/analyze-metadata", (req, res) => {
  const { url, fileSize, heuristicScore } = req.body || {};
  const normalizedScore = clamp(Number(heuristicScore) || 0, 0, 100);

  res.json({
    validUrl: isValidUrl(url),
    fileSizeLabel: formatFileSize(Number(fileSize) || 0),
    riskLabel: scoreToLabel(normalizedScore),
    summary: summarizeRisk(normalizedScore)
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
