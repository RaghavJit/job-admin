// mongodb/dbOperations.js
import connect from "./connect";

// Insert Job Function
export async function insertJob(job) {
  const client = await connect();
  const db = client.db('job-admin'); // Replace with your DB name
  const jobsCollection = db.collection('Jobs'); // Replace with your collection name

  try {
    const result = await jobsCollection.insertOne(job);
    console.log(`Job inserted with ID: ${result.insertedId}`);
    return result;
  } catch (error) {
    console.error("Failed to insert job", error);
  } finally {
    await client.close();
  }
}

// Get Jobs Function
export async function getJobs() {
  const client = await connect();
  const db = client.db('job-admin'); // Replace with your DB name
  const jobsCollection = db.collection('Jobs'); // Replace with your collection name

  try {
    const jobs = await jobsCollection.find({}).toArray();
    console.log("Jobs fetched:", jobs);
    return jobs;
  } catch (error) {
    console.error("Failed to fetch jobs", error);
  } finally {
    await client.close();
  }
}
