import React from "react";

const JobModal = ({ title, description, datePosted, lastDateToApply, totalApplications, salary }) => {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => document.getElementById('job_modal').showModal()}
      >
        View Full Details
      </button>

      <dialog id="job_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
          
          <div className="grid grid-cols-1 gap-2 text-sm">
            <p><strong>Date Posted:</strong> {datePosted}</p>
            <p><strong>Last Date to Apply:</strong> {lastDateToApply}</p>
            <p><strong>Total Applications:</strong> {totalApplications}</p>
            <p><strong>Salary:</strong> {salary}</p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* This will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default JobModal;
