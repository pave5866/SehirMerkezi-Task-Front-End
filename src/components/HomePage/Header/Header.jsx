import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const links = ["Home", "About", "Product", "Testimonial"];

  return (
    <header className="header_container">
      <div className="logo">
        <a href="#">
          <img src="/Logo.png" alt="logo" />
        </a>
      </div>
      <ul className="nav_link">
        {links.map((link, i) => (
          <li key={i}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="btn_container">
        <a href="#Contact">Contact</a>
        <Link to="/product/1">
          <button className="btn">Buy Online</button>
        </Link>
      </div>
    </header>
  );
}
