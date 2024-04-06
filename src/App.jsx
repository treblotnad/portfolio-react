import { Outlet } from "react-router-dom";
import Nav from "./components/Nav2";
import "bulma";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div id="app">
      <Nav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
