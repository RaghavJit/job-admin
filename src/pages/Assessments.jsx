import React, { useState } from "react";
import Layout from "../components/Layout";
import QuestionSet from "../components/QuestionSet.jsx"; // Import the QuestionSet component

const Assessments = () => {
  // Sample question sets for demonstration
  const questionSets = {
    "Job 1": [
      { id: 1, text: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
      { id: 2, text: "What is the square root of 64?", options: ["6", "7", "8", "9"] },
    ],
    "Job 2": [
      { id: 1, text: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"] },
      { id: 2, text: "What is the chemical formula of water?", options: ["H2O", "O2", "CO2", "H2"] },
    ],
  };

  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedQuestionSet, setSelectedQuestionSet] = useState(null);

  // Handle job selection
  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setSelectedQuestionSet(null); // Reset question set when job changes
  };

  // Handle question paper set selection
  const handleQuestionSetSelect = (job) => {
    setSelectedQuestionSet(questionSets[job]); // Set the entire array of questions for the selected job
  };

  return (
    <Layout>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1"
        >
          Select Job
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {Object.keys(questionSets).map((job) => (
            <li key={job}>
              <a onClick={() => handleJobSelect(job)}>{job}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Only show this dropdown after a job is selected */}
      {selectedJob && (
        <div className="dropdown mt-4">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1"
          >
            Select Question Paper Set
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleQuestionSetSelect(selectedJob)}>
                {`Set for ${selectedJob}`}
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Display question set if selected */}
      {selectedQuestionSet && (
        <div className="mt-6">
          <h3 className="text-lg font-bold">Question Set for {selectedJob}</h3>
          <QuestionSet questions={selectedQuestionSet} />
        </div>
      )}
    </Layout>
  );
};

export default Assessments;
