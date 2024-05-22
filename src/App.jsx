import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="lg:container lg:mx-auto min-w-[420px]">
      <Navbar />
      <div className="px-2">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
