import { Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <Link to="/">
          <img
            style={{ width: "100px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uaDirPpPnl2LXpeyaCxuSCpTgtwILxM2MRJCdSROjw&s"
            alt="logo"
          />
        </Link>
      </div>
      <ul>
        <Link to="/" style={{ textDecoration: "none", color: "#2e2e2e" }}>
          Home
        </Link>

        <Link to="/skills" style={{ textDecoration: "none", color: "#2e2e2e" }}>
          Skills
        </Link>
      </ul>

      <Link
        to="/login"
        style={{ textDecoration: "none", paddingLeft: "150px" }}
      >
        <button className="btn-login">Contact</button>
      </Link>
    </nav>
  );
};

export default Navigation;
