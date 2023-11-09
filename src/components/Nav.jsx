import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div id="templatemo_menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/create">Add</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li className="welcome-message">
          <a style={{ color: "yellow" }}>Welcome, user</a>
        </li>
      </ul>
    </div>
  );
}