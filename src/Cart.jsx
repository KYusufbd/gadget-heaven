import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import GadgetContext from "./GadgetContext";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const items = useContext(GadgetContext);
  const { cart, setCart, formatNumber } = useContext(DashboardContext);
  const [totalCost, setTotalCost] = useState(0);
  const [totalInModal, setTotalInModal] = useState(0);

  // This codes shows total cost of items of cart
  useEffect(() => {
    const prices = [];
    items.map((g) => {
      if (cart.includes(g.product_id)) {
        prices.push(g.price);
      }
    });
    let cost = 0;
    for (let i = 0; i < prices.length; i++) {
      cost += prices[i];
    }

    setTotalCost(cost);
  }, [cart, items]);

  // Function for removing items from cart
  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((id) => id !== item));
  };

  // Sort by price function
  const sortByPrice = () => {
    const cartWithPrices = [];
    const sortedCart = [];
    items.map((g) => {
      if (cart.includes(g.product_id)) {
        cartWithPrices.push({ id: g.product_id, price: g.price });
      }
    });
    cartWithPrices.sort((a, b) => b.price - a.price);
    cartWithPrices.map((i) => {
      sortedCart.push(i.id);
    });
    setCart(sortedCart);
    console.log(cart);
  };

  // Purchase function
  const purchase = () => {
    const total = totalCost;
    setTotalInModal(total);
    document.getElementById("my_modal_3").showModal();
    setCart([]);
  };

  // Navigate function
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col gap-8 bg-bgcol px-4 pb-16 pt-12">
      <Helmet>
        <title>Cart | Gadget Heaven</title>
      </Helmet>
      <div className="mx-auto flex w-full max-w-page-width flex-row flex-wrap items-center justify-between">
        <h5 className="text-2xl font-bold">Cart</h5>
        <div className="flex flex-row flex-wrap items-center gap-6">
          <h5 className="text-2xl font-bold">
            Total Cost: {formatNumber(totalCost)}
          </h5>
          <div className="flex flex-row flex-wrap gap-4">
            <button
              onClick={() => sortByPrice()}
              className="btn btn-outline rounded-full border-primary text-lg font-semibold text-primary hover:bg-primary hover:text-white"
            >
              Sort By Price <TuneIcon />
            </button>
            <button
              onClick={() => purchase()}
              className={`btn rounded-full bg-primary text-lg font-semibold text-white hover:text-txtcol ${totalCost === 0 && "btn-disabled"}`}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-page-width flex-col gap-6">
        {cart.map((id) => {
          const gadget = items.find((item) => item.product_id === id);
          return (
            <div
              key={`cart-${id}`}
              className="relative flex flex-row flex-wrap gap-8 rounded-2xl bg-white p-8"
            >
              <div className="flex aspect-square h-32 w-52 items-center justify-center overflow-hidden rounded-xl">
                <img
                  className="min-h-full w-full"
                  src={gadget?.product_image}
                  alt="gadget-image"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">
                  {gadget?.product_title}
                </h1>
                <p className="text-lg opacity-60">{gadget?.description}</p>
                <p className="text-xl font-semibold opacity-80">
                  Price: {formatNumber(gadget?.price)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(gadget.product_id)}
                className="border-2px absolute right-4 top-4 ml-auto h-fit rounded-full border border-red-500"
              >
                <CloseIcon className="text-red-500" />
              </button>
            </div>
          );
        })}
      </div>
      {/* Payment successful notification modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col items-center gap-6 text-center">
          <div>
            <img src="/successfull-icon.png" alt="successful-icon" />
          </div>
          <h3 className="text-2xl font-bold">Payment Successful</h3>
          <div className="flex w-full flex-col items-center gap-4">
            <p className="text-base font-medium opacity-60">
              Thanks for purchasing.
            </p>
            <p className="text-base font-medium opacity-60">
              Total: {formatNumber(totalInModal)}
            </p>
            <form method="dialog" className="w-full">
                <button onClick={() => navigate('/')} className="btn btn-ghost btn-active w-full rounded-full">
                  Close
                </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
