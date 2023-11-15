import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


export default function Nav() {
  const userData = useContext(UserContext);
  const isUser = userData.user;


  return (
    <div id="templatemo_menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        {isUser && <div id="user"><li><NavLink to="/create">Add</NavLink><NavLink to="/" onClick={() => userData.user.onLogout()} >Logout</NavLink></li></div>}
        {!isUser && <div id="guest">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </div>}
        {isUser && <li className="welcome-message">
          <a style={{ color: "yellow" }}>{`Welcome, ${userData.user.email}`}</a>
        </li>}
      </ul>
    </div>
  );
}