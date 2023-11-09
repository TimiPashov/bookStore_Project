import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <div id="templatemo_menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/create">Add</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li className="welcome-message">
          <a style={{ color: "yellow" }}>Welcome, user</a>
        </li>
      </ul>
    </div>
  );
}