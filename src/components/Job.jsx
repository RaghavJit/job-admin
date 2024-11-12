import React, { useState } from "react";
import JobModal from "./JobModal";

const Job = ({ id, title, description, datePosted }) => {

  const openModal = () => {
    document.getElementById(`${id}_job_modal`).showModal();
  };

  return (
    <>
      <div className="flex-grow min-w-40 border border-gray-300">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="text-sm text-gray-500">Posted on: {datePosted}</p>

          <div className="card-actions flex flex-wrap">
            <button className="btn btn-primary btn-outline flex-1 rounded-none">View Applicants</button>
            <button
              className="btn btn-secondary btn-outline flex-1 rounded-none"
              onClick={openModal}
            >
              View Full Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal for full job details */}
      <JobModal id={id} />
    </>
  );
};

export default Job;
