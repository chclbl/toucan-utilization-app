import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import placeholder components (we'll create these next)
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';
import People from './components/People/People';
import Administration from './components/Administration/Administration';
import Database from './components/Database/Database';

function App() {
  const [activeSection, setActiveSection] = useState('Dashboard');
  
  // Define subsections for each main section
  const sidebarSections = {
    Dashboard: ['Overview', 'Analytics', 'Reports'],
    Projects: ['All Projects', 'Active', 'Completed', 'Add New'],
    People: ['Team Members', 'Utilization', 'Skills', 'Availability'],
    Administration: ['Users', 'Roles', 'Settings', 'Audit Log'],
    Database: ['Connections', 'Queries', 'Backup', 'Restore']
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <div className="logo">Toucan</div>
          <nav className="main-nav">
            {Object.keys(sidebarSections).map(section => (
              <Link 
                key={section} 
                to={`/${section.toLowerCase()}`}
                className={activeSection === section ? 'active' : ''}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </Link>
            ))}
          </nav>
        </header>
        
        <div className="main-container">
          <aside className="sidebar">
            <h3>{activeSection}</h3>
            <ul>
              {sidebarSections[activeSection].map(subSection => (
                <li key={subSection}>
                  <Link to={`/${activeSection.toLowerCase()}/${subSection.toLowerCase().replace(/\s+/g, '-')}`}>
                    {subSection}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/people/*" element={<People />} />
              <Route path="/administration/*" element={<Administration />} />
              <Route path="/database/*" element={<Database />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;