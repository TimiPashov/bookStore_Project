export default function Nav() {
  return (
    <div id="templatemo_menu">
      <ul>
        <li>
          <a href="index.html" className="current">
            Home
          </a>
        </li>
        <li>
          <a href="subpage.html">Search</a>
        </li>
        <li>
          <a href="subpage.html">Add</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        <li className="welcome-message">
          <a href="#" style={{ color: "yellow", }}>Welcome, user</a>
        </li>
      </ul>
    </div>
  );
}