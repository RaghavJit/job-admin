import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Job from "../components/Job";
import AddJobModal from "../components/AddJobModal";
import { getJobs } from "../mongodb/jobs"; // Importing the getJobs function

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]); // State to store jobs

  // Fetch jobs using the getJobs function
  useEffect(() => {
    async function fetchJobs() {
      const jobsData = await getJobs(); // Call the imported function
      setJobs(jobsData); // Set the fetched jobs in state
    }

    fetchJobs(); // Call the fetchJobs function when the component mounts
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.getElementById('add_job_modal').showModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.getElementById('add_job_modal').close();
  };

  return (
    <Layout>
      <section>
        <h1 className="text-4xl text-center mb-5 font-bold">JOBS</h1>
      </section>

      <div className="flex flex-wrap items-center justify-center gap-2 mx-10">
        {/* Map over the jobs array and render a Job component for each */}
        {jobs.map((job) => (
          <Job
            key={job._id} // Make sure to use a unique key (assuming _id exists)
            title={job.title}
            description={job.description}
          />
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        className="btn btn-circle text-4xl btn-lg btn-ghost border border-primary fixed bottom-6 right-6 z-50"
        onClick={openModal}
        title="Add Job"
      >
        +
      </button>

      {/* Add Job Modal */}
      <AddJobModal closeModal={closeModal} />
    </Layout>
  );
}

export default Dashboard;
