import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import GadgetContext from "./GadgetContext";
import { DashboardContext } from "./DashboardContext";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const [cart, setCart] = useState(["P003", "P007"]);
  const [wishlist, setWishlist] = useState(["P002", "P009"]);
  const [totalCost, setTotalCost] = useState(0);
  const maximumPrice = 2500;

  // Function for formatting numbers:
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  // Add to cart function:
  function addToCart(itemId, price, remove) {
    if (!cart.includes(itemId)) {
      if (price + totalCost <= maximumPrice) {
        setCart([...cart, itemId]);
        toast("Successfully added to Cart!");
        if (remove) {
          removeFromWishlist(itemId);
        }
      } else {
        toast("Sorry, adding this item will exceed maximum price!");
      }
    } else {
      toast("This item is already in the cart!");
    }
  }

  // Remove from wishlist function:
  const removeFromWishlist = (itemId) =>
    setWishlist((prevCart) => prevCart.filter((id) => id !== itemId));

  const cartAndWishlist = {
    cart,
    setCart,
    addToCart,
    wishlist,
    setWishlist,
    removeFromWishlist,
    totalCost,
    setTotalCost,
    formatNumber,
  };

  return (
    <DashboardContext.Provider value={cartAndWishlist}>
      <GadgetContext.Provider value={gadgets}>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
          <ToastContainer position="top-center" />
        </div>
      </GadgetContext.Provider>
    </DashboardContext.Provider>
  );
}

export default App;
