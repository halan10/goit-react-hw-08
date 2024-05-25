import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import MobileAppBar from '../MobileAppBar/MobileAppBar';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import MaterialAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

import css from './AppBar.module.css';

export const AppBar = () => {
  const mobileSize = useMediaQuery('only screen and (max-width : 768px)');
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }} className={css.mainBox}>
      <MaterialAppBar position="static" className={css.mainContainer}>
        <Toolbar className={css.toolbar}>
          {mobileSize ? <MobileAppBar /> : <Navigation />}
          {IsLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </MaterialAppBar>
    </Box>
  );
};
