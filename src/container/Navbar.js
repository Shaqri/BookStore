import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  navbar, logo, navLinks, flex, leftmost, navLink, userIcon, active,
} from '../style/app.module.css';

const Navbar = () => (
  <nav className={`${navbar} ${flex}`}>
    <div className={`${flex} ${leftmost}`}>
      <p className={logo}>
        Bookstore CMS
      </p>
      <div className={navLinks}>
        <NavLink className={navLink} activeClassName={active} to="/"> Books </NavLink>
        <NavLink className={navLink} to="/categories">Categories</NavLink>
      </div>
    </div>

    <FontAwesomeIcon id={userIcon} icon="user" />

  </nav>
);

export default Navbar;