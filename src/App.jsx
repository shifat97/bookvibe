import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="lg:container lg:mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
