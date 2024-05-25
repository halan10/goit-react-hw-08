import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? css.linkActive : css.link;
  };
  return (
    <div>
      <NavLink to="/register" className={getNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        Login
      </NavLink>
    </div>
  );
};
