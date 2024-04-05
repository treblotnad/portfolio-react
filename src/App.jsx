import { Outlet } from "react-router-dom";
import Nav from "./components/Nav2";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
