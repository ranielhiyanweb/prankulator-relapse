  const express = require("express");
  const app = express();
  const path = require("path");

  // Serve static files in the current directory (public folder and media)
  app.use(express.static(__dirname));

  // Optional routes for other HTML pages
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/video", (req, res) => {
    res.sendFile(path.join(__dirname, "video.html"));
  });

  app.get("/readme", (req, res) => {
    res.sendFile(path.join(__dirname, "readme.html"));
  });

  app.get("/loading", (req, res) => {
    res.sendFile(path.join(__dirname, "loading.html"));
  });

  // Run the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Calculator prank running on http://localhost:${PORT}`);
  });
