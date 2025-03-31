// src/components/Dashboard/Dashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Sub-components
const Overview = () => <div><h2>Dashboard Overview</h2><p>Welcome to Toucan utilization dashboard.</p></div>;
const Analytics = () => <div><h2>Analytics</h2><p>View detailed analytics here.</p></div>;
const Reports = () => <div><h2>Reports</h2><p>Generate and view reports.</p></div>;

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default Dashboard;