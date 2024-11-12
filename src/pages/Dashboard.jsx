import React, { useState } from "react";

import Layout from "../components/Layout";
import Job from "../components/Job"; 
import AddJobModal from "../components/AddJobModal"; 

function Dashboard() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="grid gap-6">
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
        <Job title={'hello'} description={'ldskfja'}/>
      </div>

      {/* Floating Add Button */}
      <button
        className="btn btn-circle fixed bottom-6 right-6 z-50"
        onClick={openModal}
        title="Add Job"
      >
        +
      </button>

      {/* Add Job Modal */}
      {isModalOpen && <AddJobModal closeModal={closeModal} />}
    </Layout>
  );
}

export default Dashboard;
