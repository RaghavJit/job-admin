import React, { useState } from "react";

const JobModal = ({ title, description, datePosted, lastDateToApply, totalApplications, salary }) => {
  // State to manage whether the modal is in 'edit' mode
  const [isEditing, setIsEditing] = useState(false);

  // State to store updated field values
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedDatePosted, setUpdatedDatePosted] = useState(datePosted);
  const [updatedLastDateToApply, setUpdatedLastDateToApply] = useState(lastDateToApply);
  const [updatedSalary, setUpdatedSalary] = useState(salary);
  const [updatedApplications, setUpdatedApplications] = useState(totalApplications);

  // Handle the Edit/Save button click
  const handleEditClick = (e) => {
    e.preventDefault(); // Prevent form submission and modal closing
    setIsEditing(true);
  };

  // Handle saving the updated fields
  const handleSaveClick = (e) => {
    e.preventDefault(); // Prevent form submission and modal closing
    // Save the changes (for now we just log them to the console)
    console.log("Saved changes", {
      updatedTitle,
      updatedDescription,
      updatedDatePosted,
      updatedLastDateToApply,
      updatedSalary,
      updatedApplications,
    });
    setIsEditing(false); // Switch back to non-editable mode
  };

  // Handle delete (You can add your delete functionality here)
  const handleDeleteClick = () => {
    console.log("Deleted job:", title); // Placeholder for delete functionality
  };

  return (
    <div>

      <dialog id={`${title}_job_modal`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* Title */}
          <h3 className="font-bold text-lg">
            {isEditing ? (
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="input input-bordered w-full"
              />
            ) : (
              updatedTitle
            )}
          </h3>

          {/* Description */}
          <p className="py-4">
            {isEditing ? (
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
            ) : (
              updatedDescription
            )}
          </p>

          {/* Date Posted */}
          <div className="grid grid-cols-1 gap-2 text-sm">
            <p>
              <strong>Date Posted:</strong>{" "}
              {isEditing ? (
                <input
                  type="date"
                  value={updatedDatePosted}
                  onChange={(e) => setUpdatedDatePosted(e.target.value)}
                  className="input input-bordered"
                />
              ) : (
                updatedDatePosted
              )}
            </p>
            {/* Last Date to Apply */}
            <p>
              <strong>Last Date to Apply:</strong>{" "}
              {isEditing ? (
                <input
                  type="date"
                  value={updatedLastDateToApply}
                  onChange={(e) => setUpdatedLastDateToApply(e.target.value)}
                  className="input input-bordered"
                />
              ) : (
                updatedLastDateToApply
              )}
            </p>
            {/* Total Applications (Non-editable) */}
            <p>
              <strong>Total Applications:</strong> {updatedApplications}
            </p>
            {/* Salary */}
            <p>
              <strong>Salary:</strong>{" "}
              {isEditing ? (
                <input
                  type="number"
                  value={updatedSalary}
                  onChange={(e) => setUpdatedSalary(e.target.value)}
                  className="input input-bordered"
                />
              ) : (
                updatedSalary
              )}
            </p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* Close Button */}
              <button className="btn" onClick={() => document.getElementById('job_modal').close()}>
                Close
              </button>
              {/* Delete Button */}
              <button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button>
              {/* Edit/Save Button */}
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
