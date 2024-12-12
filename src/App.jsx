import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";

function App() {
  const [gadgets, setGadgets] =useState([]);
  const GadgetContext = createContext(null);

  useEffect(() => {
    fetch("gadgets.json")
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
