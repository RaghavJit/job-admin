import React, { useState } from "react";

const AddJobModal = ({ closeModal, setJobs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [lastDateToApply, setLastDateToApply] = useState("");
  const [totalApplications, setTotalApplications] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddJob = () => {
    // Logic for adding the job (e.g., update state, send request, etc.)

    const randomId = '_' + Math.random().toString(36).substr(2, 9);

    const newJob = {
      id: randomId, // You can generate a new unique ID
      title: title, // Values from your form inputs
      description: description,
      salary: salary,
      posted_on: datePosted,
      last_date_to_apply: lastDateToApply
    };
    
    setJobs((prevJobs) => [...prevJobs, newJob]);

    closeModal(); // Close the modal after job is added
  };

  return (
    <dialog id="add_job_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add New Job</h3>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Job Description"
            className="textarea textarea-bordered"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            className="input input-bordered"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
          />
          <input
            type="date"
            className="input input-bordered"
            value={lastDateToApply}
            onChange={(e) => setLastDateToApply(e.target.value)}
          />
          <input
            type="number"
            placeholder="Total Applications"
            className="input input-bordered"
            value={totalApplications}
            onChange={(e) => setTotalApplications(e.target.value)}
          />
          <input
            type="number"
            placeholder="Salary"
            className="input input-bordered"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleAddJob}>
              Add Job
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddJobModal;
