// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Layout with Sidebar, Header, and Footer
import Home from './pages/Home';
import Predict from './pages/Predict';
import Graphs from './pages/Graphs';
import About from './pages/About';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import Predicted from './pages/Predicted';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main routes accessible via Sidebar */}
          <Route index element={<Home />} />
          <Route path="predict" element={<Predict />} />
          <Route path="predicted" element={<Predicted />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        {/* Authentication routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
