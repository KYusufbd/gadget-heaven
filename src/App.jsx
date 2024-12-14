import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import GadgetContext from "./GadgetContext";

function App() {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <GadgetContext.Provider value={gadgets}>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </GadgetContext.Provider>
  );
}

export default App;
