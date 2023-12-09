import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import styles from './Nav.module.css';

export default function Nav() {
  const userData = useContext(UserContext);
  const isUser = userData.user;

  return (
    <div id="templatemo_menu" className={styles.templatemo_menu} >
      <ul>
        <li>
          <NavLink to="/" className={styles.selectedCustom}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        {isUser && <div id="user"><li><NavLink to="/create">Add</NavLink><Link to="/" onClick={() => userData.onLogout()} >Logout</Link></li></div>}
        {!isUser && <div id="guest">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </div>}
        {isUser && <li>
          <NavLink to="/user">{`Welcome, ${userData.user.email}`}</NavLink>
        </li>}
      </ul>
    </div>
  );
}