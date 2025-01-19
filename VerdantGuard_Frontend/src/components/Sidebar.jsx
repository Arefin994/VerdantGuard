// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, PostAdd, Person, ExitToApp, Login, PersonAdd } from '@mui/icons-material';

const Sidebar = () => {
  const location = useLocation(); // Get current location
  const token = localStorage.getItem('token'); // Check if user is logged in

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    localStorage.removeItem('user'); // Remove user info
    window.location.href = '/login'; // Redirect to login page
  };

  return (
   <div></div>
  );
};

export default Sidebar;
