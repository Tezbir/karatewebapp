require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

if (!uri) {
  console.error("MONGO_URI is missing");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/contact", async (req, res) => {
  try {
    if (!database) {
      return res.status(500).json({
        message: "Database not connected yet",
      });
    }

    const { info } = req.body;

    if (!info) {
      return res.status(400).json({
        message: "Missing contact info",
      });
    }

    const result = await database.collection("contacts").insertOne({
      info,
      createdAt: new Date(),
    });

    res.status(201).json({
      message: "Saved successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving contact:", error);

    res.status(500).json({
      message: "Error saving contact",
    });
  }
});

async function startServer() {
  try {
    await client.connect();
    database = client.db("websiteDB");

    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

startServer();