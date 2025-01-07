"use strict";

const { MongoClient } = require("mongodb");

let connectionInstance = null;

async function connectToDatabase() {
  if (connectionInstance) {
    return connectionInstance;
  }

  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
  });

  const connection = await client.connect();
  connectionInstance = connection.db(process.env.DATABASE_NAME);

  return connectionInstance;
}

async function createShortLink(originalUrl, shortCode) {
  const db = await connectToDatabase();
  const collection = db.collection("links");
  const link = collection.insertOne({
    originalUrl,
    shortCode,
    createdAt: new Date(),
  });

  return link;
}

async function getLinkByOriginalUrl(originalUrl) {
  const db = await connectToDatabase();
  const collection = db.collection("links");
  const link = collection.findOne({ originalUrl });

  return link;
}

async function getLinkByShortCode(shortCode) {
  const db = await connectToDatabase();
  const collection = db.collection("links");
  const link = collection.findOne({ shortCode });

  return link;
}

async function deleteLinkByShortCode(shortCode) {
  const db = await connectToDatabase();
  const collection = db.collection("links");
  const link = collection.deleteOne({ shortCode });

  return link;
}

module.exports = {
  createShortLink,
  getLinkByOriginalUrl,
  getLinkByShortCode,
  deleteLinkByShortCode,
};
