import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";
export const GadgetContext = createContext(null);

function App() {
  const [gadgets, setGadgets] = useState([]);

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
