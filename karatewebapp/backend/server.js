require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());


const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database;

async function connectDB() {
  try {
    await client.connect();
    database = client.db("websiteDB");

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDB();

app.post("/api/contact", async (req, res) => {
  try {
    const { info } = req.body;

    const result = await database.collection("contacts").insertOne({
      info: info,
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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});