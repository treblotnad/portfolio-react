import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const currentPage = useLocation().pathname.toLowerCase();
  const [value, setValue] = useState(currentPage);
  useEffect(() => {
    //makes going forward and backword highlight correct tab when page changes
    setValue(currentPage);
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id="nav">
      <h1 id="nameTitle">Dan Tolbert</h1>
      <nav id="navBox">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
        <Link
          to="portfolio"
          className={
            currentPage === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          className={
            currentPage === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
        <Link
          to="resume"
          className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
