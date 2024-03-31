import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <header>
      <h1>test</h1>
      <Outlet />
    </header>
  );
}

export default App;
