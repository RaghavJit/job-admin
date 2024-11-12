import React, {createContext} from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard.jsx';
import Candidates from './pages/Candidates.jsx';
import Assessments from './pages/Assessments.jsx';

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path='/assessment' element={<Assessments />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </>
  )
}

export default App;
