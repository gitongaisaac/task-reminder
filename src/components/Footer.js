import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul className="foot-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <p>Copyright &copy; izzy 2022</p>
    </div>
  );
};

export default Footer;
