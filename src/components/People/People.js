// src/components/People/People.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Sub-components
const TeamMembers = () => <div><h2>Team Members</h2><p>View all team members.</p></div>;
const Utilization = () => <div><h2>Utilization</h2><p>View team utilization data.</p></div>;
const Skills = () => <div><h2>Skills</h2><p>Manage team skills.</p></div>;
const Availability = () => <div><h2>Availability</h2><p>Check team availability.</p></div>;

function People() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TeamMembers />} />
        <Route path="/team-members" element={<TeamMembers />} />
        <Route path="/utilization" element={<Utilization />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/availability" element={<Availability />} />
      </Routes>
    </div>
  );
}

export default People;