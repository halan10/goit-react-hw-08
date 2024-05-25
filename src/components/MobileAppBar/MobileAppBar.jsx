import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import css from './MobileAppBar.module.css';

export default function MobileAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? css.linkActive : css.link;
  };
  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className={css.mainContainer}
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NavLink to="/" className={getNavLinkClass}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
              </NavLink>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {isLoggedIn && (
                <NavLink to="/contacts" className={getNavLinkClass}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Contacts
                  </Typography>
                </NavLink>
              )}
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: 'whitesmoke' }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
