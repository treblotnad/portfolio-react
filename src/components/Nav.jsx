import { Link } from "react-router-dom";
export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Us
        </Link>,
      ]}
    />
  );
}
