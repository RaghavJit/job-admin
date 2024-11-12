import React, { useState } from "react";
import JobModal from "./JobModal";

const Job = ({ title, description, datePosted }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <div className="card bg-base-100 w-full sm:max-w-sm lg:max-w-md shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="text-sm text-gray-500">Posted on: {datePosted}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Applicants</button>
            <button
              className="btn btn-secondary"
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
