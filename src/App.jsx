import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-[#F6F6F6]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
