import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import GadgetContext from "./GadgetContext";
import { DashboardContext } from "./DashboardContext";

function App() {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  const cartAndWishlist = { cart, setCart, wishlist, setWishlist };

  return (
    <DashboardContext.Provider value={cartAndWishlist}>
      <GadgetContext.Provider value={gadgets}>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </GadgetContext.Provider>
    </DashboardContext.Provider>
  );
}

export default App;
