import { useLocation } from "react-router-dom";
export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  let currentPage = useLocation()
    .pathname.charAt(1)
    .toUpperCase()
    .concat(useLocation().pathname.toLowerCase().slice(2));
  if (currentPage == "") {
    currentPage = "About Me";
  }
  return (
    <header id="hero-image">
      <h2 id="hero-text">{currentPage}</h2>
    </header>
  );
}
