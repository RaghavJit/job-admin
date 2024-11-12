const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://raghavjit002:6i1JfollYcccyXsy@cluster0.t4eku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("Connection failed", error);
    throw error;
  }
}

module.exports = connect;
