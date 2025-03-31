// src/components/Projects/Projects.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Sub-components
const AllProjects = () => <div><h2>All Projects</h2><p>View all projects here.</p></div>;
const ActiveProjects = () => <div><h2>Active Projects</h2><p>View active projects.</p></div>;
const CompletedProjects = () => <div><h2>Completed Projects</h2><p>View completed projects.</p></div>;
const AddNewProject = () => <div><h2>Add New Project</h2><p>Create a new project.</p></div>;

function Projects() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllProjects />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/active" element={<ActiveProjects />} />
        <Route path="/completed" element={<CompletedProjects />} />
        <Route path="/add-new" element={<AddNewProject />} />
      </Routes>
    </div>
  );
}

export default Projects;