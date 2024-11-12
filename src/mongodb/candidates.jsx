// Insert Applicant Function
async function insertApplicant(applicant) {
  const client = await connect();
  const db = client.db("job-admin"); // Replace with your DB name
  const applicantsCollection = db.collection("Candidates"); // Replace with your collection name

  try {
    const result = await applicantsCollection.insertOne(applicant);
    console.log(`Applicant inserted with ID: ${result.insertedId}`);
    return result;
  } catch (error) {
    console.error("Failed to insert applicant", error);
  } finally {
    await client.close();
  }
}

// Get Applicants Function
async function getApplicants() {
  const client = await connect();
  const db = client.db("job-admin"); // Replace with your DB name
  const applicantsCollection = db.collection("Candidates"); // Replace with your collection name

  try {
    const applicants = await applicantsCollection.find({}).toArray();
    console.log("Applicants fetched:", applicants);
    return applicants;
  } catch (error) {
    console.error("Failed to fetch applicants", error);
  } finally {
    await client.close();
  }
}

// Export all functions
module.exports = {
    insertApplicant,
    getApplicants
  };
  