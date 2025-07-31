import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Box,
  Divider,
  Button
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/Person';

import logo from '../../assets/logo.png';


const Header = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);
  
  const handleLogout = async () => {
  try {
    await logout();
    setMenuOpen(false); 
    navigate('/');      
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 'none', backgroundColor: '#9a37a1ff' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: 50, maxWidth: 120 }} />
          </Link>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
          </IconButton>
          {!user && (
            <>
              <Button color="inherit" component={Link} to="/registro">
                Registro
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          )}
          {user && (
            <>
            <Button color="inherit" component={Link} to="/dashboard">
            Panel de administrador
            </Button>
            <Button button component="div" color="inherit" onClick={handleLogout}>
            Cerrar sesión
            </Button>
  </>
)}
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
        <Box sx={{ width: 250, backgroundColor: '#f5f5f5', height: '100%' }}>
          <IconButton onClick={toggleMenu} sx={{ margin: 1 }}>
            <CloseIcon />
          </IconButton>
          <Divider />

          <List>
            <ListItem button component={Link} to="/" onClick={toggleMenu}>
              <HomeIcon sx={{ marginRight: 2, color: '#3f51b5' }} />
              <ListItemText primary="Inicio" />
            </ListItem>


            <ListItem button component={Link} to="/registro" onClick={toggleMenu}>
            <PersonAddIcon sx={{ marginRight: 2, color: '#3f51b5' }} />
            <ListItemText primary="Registro" />
            </ListItem>

            <ListItem button component={Link} to="/login" onClick={toggleMenu}>
            <LoginIcon sx={{ marginRight: 2, color: '#3f51b5' }} />
            <ListItemText primary="Login" />
            </ListItem>

            <ListItem button component={Link} to="/contacto" onClick={toggleMenu}>
              <EmailIcon sx={{ marginRight: 2, color: '#3f51b5' }} />
              <ListItemText primary="Contacto" />
            </ListItem>


            {user && (
              <>
                <ListItem button component={Link} to="/dashboard" onClick={toggleMenu}>
                  <ListItemText primary="Panel de administrador" />
                </ListItem>
                <ListItem button component="div" onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleLogout();
                }}>
                <ListItemText primary="Cerrar sesión" />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;

