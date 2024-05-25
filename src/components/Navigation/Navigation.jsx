import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? css.linkActive : css.link;
  };
  return (
    <nav className={css.container}>
      <NavLink to="/" className={getNavLinkClass}>
        <IconButton
          disableRipple
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img
            src={logo}
            style={{ height: 40, width: 40 }}
            alt="logo"
            className={css.filter}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </IconButton>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getNavLinkClass}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
        </NavLink>
      )}
    </nav>
  );
}
