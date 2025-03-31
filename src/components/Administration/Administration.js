// src/components/Administration/Administration.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Sub-components
const Users = () => <div><h2>Users</h2><p>Manage application users.</p></div>;
const Roles = () => <div><h2>Roles</h2><p>Manage user roles and permissions.</p></div>;
const Settings = () => <div><h2>Settings</h2><p>Configure application settings.</p></div>;
const AuditLog = () => <div><h2>Audit Log</h2><p>View system audit logs.</p></div>;

function Administration() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/audit-log" element={<AuditLog />} />
      </Routes>
    </div>
  );
}

export default Administration;