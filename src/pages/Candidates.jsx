import React, { createContext } from "react";

import Layout from "../components/Layout";
import Applications from "../components/Applications";

function Candidates() {
  return (
    <>
      <Layout>
        <section>
          <h1 className="text-4xl text-center mb-5 font-bold">APPLICATIONS</h1>
        </section>

        <Applications>
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
        </Applications>
      </Layout>
    </>
  );
}

export default Candidates;
