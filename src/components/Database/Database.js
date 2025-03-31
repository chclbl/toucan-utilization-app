// src/components/Database/Database.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Sub-components
const Connections = () => <div><h2>Database Connections</h2><p>Manage database connections.</p></div>;
const Queries = () => <div><h2>Database Queries</h2><p>Run and save database queries.</p></div>;
const Backup = () => <div><h2>Database Backup</h2><p>Configure and run database backups.</p></div>;
const Restore = () => <div><h2>Database Restore</h2><p>Restore from database backups.</p></div>;

function Database() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Connections />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/backup" element={<Backup />} />
        <Route path="/restore" element={<Restore />} />
      </Routes>
    </div>
  );
}

export default Database;
