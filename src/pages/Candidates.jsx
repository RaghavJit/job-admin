import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Applications from "../components/Applications";
import CandidateModal from "../components/candidateModal";

import { getAllCandidates } from "../database/candidates"; // Assuming this is the function to fetch data

function Candidates() {
  const [candidates, setCandidates] = useState([]); // State to store candidates

  // Fetch candidates data when the component mounts
  useEffect(() => {
    async function fetchCandidates() {
      const candidateData = await getAllCandidates(); // Fetch candidate data
      setCandidates(candidateData); // Set the fetched candidates in state
      console.log(candidateData)
    }

    fetchCandidates(); // Call the fetch function on component mount
  }, []);

  // Function to open the modal by id
  const openModal = (id) => {
    const modal = document.getElementById(`${id}_can_modal`);
    if (modal) {
      modal.showModal(); // Show the modal
    }
  };

  return (
    <>
      <Layout>
        <section>
          <h1 className="text-4xl text-center mb-5 font-bold">APPLICATIONS</h1>
        </section>

        <Applications>
          {/* Map through the candidates array to display each candidate's data */}
          {candidates.length > 0 ? (
            candidates.map((candidate) => (
              <tr key={candidate.id} className="hover">
                <th>
                  <button onClick={() => openModal(candidate.id)}>
                    View
                  </button>
                </th>
                <td>{candidate.name}</td>
                <td>{candidate.title}</td>
                <td>{candidate.title}</td>
                <td>{candidate.status}</td>
                <td>{candidate.resume_link}</td>

                {/* Modal component */}
                <CandidateModal id={candidate.id} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No candidates available</td>
            </tr>
          )}
        </Applications>
      </Layout>
    </>
  );
}

export default Candidates;
