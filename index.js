// Define modules

const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve HTML files
app.use(express.static(path.join(__dirname, "public", "pages")));

// Serve CSS files
app.use("/styles", express.static(path.join(__dirname, "public", "css")));

// Serve JavaScript files
app.use("/scripts", express.static(path.join(__dirname, "public", "scripts")));

// Serve JSON files
app.get("/stored-data.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "email-list.json"));
});

// Serve home page

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "index.html"));
});

// Form submission

app.post("/submit-form", (req, res) => {
  const data = req.body;

  fs.readFile(
    path.join(__dirname, "public", "email-list.json"),
    "utf8",
    (err, jsonString) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.sendStatus(500);
      }
      let existingData = [];
      if (jsonString) {
        try {
          existingData = JSON.parse(jsonString);
        } catch (error) {
          console.error("Error parsing JSON string:", error);
          return res.sendStatus(500);
        }
      }

      existingData.push(data);

      fs.writeFile(
        path.join(__dirname, "public", "email-list.json"),
        JSON.stringify(existingData, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return res.sendStatus(500);
          }
          console.log("Data written to file");
          res.sendStatus(200);
        }
      );
    }
  );
});

// Start server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
