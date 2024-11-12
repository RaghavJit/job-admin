import React, { useState } from "react";

import Layout from "../components/Layout";
import Job from "../components/Job"; 
import AddJobModal from "../components/AddJobModal"; 

function Dashboard() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Hint By Ekus: You can use this function to toggle the modal
  // const changeModal = () => {
  //   setIsModalOpen(()=> !isModalOpen);
  // }
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
      <div className="  flex flex-wrap items-center justify-center  gap-2 mx-10">
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
        className="btn btn-circle text-4xl btn-lg btn-ghost border border-primary fixed bottom-6 right-6 z-50"
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
