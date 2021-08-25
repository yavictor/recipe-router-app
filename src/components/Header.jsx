import { Link } from "react-router-dom";


function Header() {
  return (
    <nav>
      <div className="orange nav-wrapper">
        <Link to="/" className="brand-logo center">
          Recipe-router-app
        </Link>
        <ul className="left hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/yavictor/recipe-router-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo link
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
