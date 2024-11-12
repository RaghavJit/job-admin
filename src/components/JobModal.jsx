import React, { useState, useEffect } from "react";
import {getJobById} from "../database/jobs"; // Import getJobById function

const JobModal = ({ id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [jobData, setJobData] = useState(null);

  // Handlers for edit, save, and delete
  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    console.log("Saved changes", jobData);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    console.log("Deleted job:", jobData?.title);
  };

  if (!jobData) return null; // Render nothing until data is loaded

  return (
    <div>
      <dialog id={`${id}_job_modal`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {isEditing ? (
              <input
                type="text"
                value={jobData.title}
                onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                className="input input-bordered w-full"
              />
            ) : (
              jobData.title
            )}
          </h3>

          <p className="py-4">
            {isEditing ? (
              <textarea
                value={jobData.description}
                onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
                className="textarea textarea-bordered w-full"
              />
            ) : (
              jobData.description
            )}
          </p>

          <div className="grid grid-cols-1 gap-2 text-sm">
            <p>
              <strong>Date Posted:</strong>{" "}
              {isEditing ? (
                <input
                  type="date"
                  value={jobData.datePosted}
                  onChange={(e) => setJobData({ ...jobData, datePosted: e.target.value })}
                  className="input input-bordered"
                />
              ) : (
                jobData.datePosted
              )}
            </p>
            <p>
              <strong>Last Date to Apply:</strong>{" "}
              {isEditing ? (
                <input
                  type="date"
                  value={jobData.lastDateToApply}
                  onChange={(e) => setJobData({ ...jobData, lastDateToApply: e.target.value })}
                  className="input input-bordered"
                />
              ) : (
                jobData.lastDateToApply
              )}
            </p>
            <p>
              <strong>Total Applications:</strong> {jobData.applicants.length}
            </p>
            <p>
              <strong>Salary:</strong>{" "}
              {isEditing ? (
                <input
                  type="number"
                  value={jobData.salary}
                  onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
                  className="input input-bordered"
                />
              ) : (
                jobData.salary
              )}
            </p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => document.getElementById(`${id}_job_modal`).close()}>
                Close
              </button>
              <button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button>
              <button
                className="btn btn-primary"
                onClick={isEditing ? handleSaveClick : handleEditClick}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default JobModal;
