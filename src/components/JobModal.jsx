import React, { useState, useEffect } from "react";
import { getJobById } from "../database/jobs"; // Import getJobById function

const JobModal = ({ id, jobs, setJobs }) => {
  const [jobData, setJobData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // Fetch job data on component mount or when id changes
  useEffect(() => {
    const fetchJob = async () => {
      const data = await getJobById(id);
      setJobData(data);
      setFormData(data); // Initialize formData with fetched job data
    };
    if (id) fetchJob();
  }, [id]);

  // Handle input change when editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle saving the form data
  const handleSave = () => {
    setJobData(formData); // Save the edited data
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, ...formData } : job
    );
    setJobs(updatedJobs); // Update the jobs state with the modified job
    setIsEditing(false); // Exit editing mode
  };

  // Toggle edit mode
  const toggleEdit = () => {
    if (isEditing) {
      handleSave(); // If saving, update jobData and turn off editing
    } else {
      setIsEditing(true); // If not editing, turn on editing mode
    }
  };

  // Handle cancel (revert changes)
  const handleCancel = () => {
    setFormData(jobData); // Revert formData to original jobData
    setIsEditing(false); // Exit editing mode
  };

  // Handle delete (for demonstration purposes)
  const handleDelete = () => {
    console.log(`Delete job with id: ${id}`);
    const temp = jobs.filter((job) => job.id !== id);
    setJobs(temp);
    // Add delete functionality here if needed
  };

  return (
    <div>
      <dialog id={`${id}_job_modal`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Job Details</h3>

          <div className="py-4">
            <p>
              <strong>Job Title:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              ) : (
                jobData?.title || ""
              )}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {isEditing ? (
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered"
                />
              ) : (
                jobData?.description || ""
              )}
            </p>
            <p>
              <strong>Salary:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="salary"
                  value={formData.salary || ""}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              ) : (
                jobData?.salary || ""
              )}
            </p>
            <p>
              <strong>Posted On:</strong>{" "}
              {isEditing ? (
                <input
                  type="date"
                  name="postedOn"
                  value={formData.posted_on || ""}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              ) : (
                jobData?.posted_on || ""
              )}
            </p>
            <p>
              <strong>Last Date to Apply:</strong>{" "}
              {isEditing ? (
                <input
                  type="date"
                  name="lastDateToApply"
                  value={formData.last_date_to_apply || ""}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              ) : (
                jobData?.last_date_to_apply || ""
              )}
            </p>
          </div>

          <div className="modal-action">
            <button className="btn" onClick={toggleEdit}>
              {isEditing ? "Save" : "Edit"}
            </button>
            {isEditing && (
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            )}
            <button className="btn btn-error" onClick={handleDelete}>
              Delete
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default JobModal;
