import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { logout } from '../store';


// const pages = ['Home', 'Pricing', 'Blog'];
const pages = [{ name: 'Home', route: '#/'},{ name: 'Movie', route: '#/movies'},{ name: 'TV SHOW', route: '#/'}]
const settings = ['Profile'];


const Nav = () => {
    const dispatch = useDispatch();
    const {auth} = useSelector(state=>state);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MOVIE APP
            </Typography>

        
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={page.route}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
  
            {/* USER ICON MENU */}
            {auth.id ? 
                        <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar src={auth.avatar ? auth.avatar:''} />
                          </IconButton>
                        </Tooltip>
                        <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                              <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                          ))}
                            <MenuItem key={'logout'} onClick={handleCloseUserMenu}>
                              <Typography textAlign="center" onClick={()=>dispatch(logout())}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                      </Box>
            :             
            <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
              <Button
                key='login'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href='#/login'
              >
                Login
              </Button>
            </Box>
            }

          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Nav;