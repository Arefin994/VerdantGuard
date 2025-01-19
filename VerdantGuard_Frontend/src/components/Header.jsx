import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')) || {}; // Ensure user is an object

  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [drawerOpen, setDrawerOpen] = useState(false); // For mobile menu

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '88%', // Ensures full width for centering
        margin: '0 auto', // Centers the div itself if required
    }}>
      <AppBar position="static" sx={{ backgroundColor: '#2e7d32' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          VerdantGuard
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: isActive('/') ? 'white' : '#C8E6C9',
              textTransform: 'none',
              margin: '0 8px',
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/predict"
            sx={{
              color: isActive('/predict') ? 'white' : '#C8E6C9',
              textTransform: 'none',
              margin: '0 8px',
            }}
          >
            Predict
          </Button>
          <Button
            component={Link}
            to="/predicted"
            sx={{
              color: isActive('/predicted') ? 'white' : '#C8E6C9',
              textTransform: 'none',
              margin: '0 8px',
            }}
          >
            Predicted
          </Button>
          <Button
            component={Link}
            to="/graphs"
            sx={{
              color: isActive('/graphs') ? 'white' : '#C8E6C9',
              textTransform: 'none',
              margin: '0 8px',
            }}
          >
            Graphs
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: isActive('/about') ? 'white' : '#C8E6C9',
              textTransform: 'none',
              margin: '0 8px',
            }}
          >
            About
          </Button>
        </Box>
        {token ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={user?.profilePicture || null}
              alt={user?.name || 'User'}
              onClick={handleMenuOpen}
              sx={{ cursor: 'pointer', width: 30, height: 30 }}
            >
              {!user?.profilePicture && <AccountCircle />}
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: '45px' }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box>
            <Button
              component={Link}
              to="/login"
              sx={{
                color: isActive('/login') ? 'white' : '#C8E6C9',
                textTransform: 'none',
                margin: '0 8px',
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              sx={{
                color: isActive('/register') ? 'white' : '#C8E6C9',
                textTransform: 'none',
                margin: '0 8px',
              }}
            >
              Register
            </Button>
          </Box>
        )}
        {/* Hamburger menu for mobile */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/predict">
                <ListItemText primary="Predict" />
              </ListItem>
              <ListItem button component={Link} to="/predicted">
                <ListItemText primary="Predicted" />
              </ListItem>
              <ListItem button component={Link} to="/graphs">
                <ListItemText primary="Graphs" />
              </ListItem>
              <ListItem button component={Link} to="/about">
                <ListItemText primary="About" />
              </ListItem>
              {token && (
                <ListItem button onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              )}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Header;
