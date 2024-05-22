import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import MainContent from './components/MainContent';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="app">
        <Sidebar />
        <div className="main">
          <MainContent />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;