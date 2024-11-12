import React, { useState } from "react";
import JobModal from "./JobModal";

const Job = ({ title, description, datePosted }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <div className="  flex-grow min-w-40 border border-gray-300">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="text-sm text-gray-500">Posted on: {datePosted}</p>

          <div className="card-actions flex flex-wrap">
            <button className="btn btn-primary btn-outline flex-1 rounded-none">View Applicants</button>
            <button
              className="btn btn-secondary btn-outline flex-1 rounded-none"
              onClick={toggleModal}
            >
              View Full Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal for full job details */}
      {showModal && <JobModal toggleModal={toggleModal} />}
    </>
  );
};

export default Job;
