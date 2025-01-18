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

  const [cart, setCart] = useState(["P004", "P007", "P005", "P011"]);

  const [wishlist, setWishlist] = useState(["P002", "P009", "P010", "P013"]);

  // Function for formatting numbers:
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const cartAndWishlist = {
    cart,
    setCart,
    wishlist,
    setWishlist,
    formatNumber,
  };

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
