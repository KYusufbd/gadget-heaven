import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import GadgetContext from "./GadgetContext";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router";

const Cart = () => {
  const gadgets = useContext(GadgetContext);
  const { cart, setCart, formatNumber } = useContext(DashboardContext);
  const [totalCost, setTotalCost] = useState(0);
  const [totalInModal, setTotalInModal] = useState(0);

  // This codes shows total cost of items of cart
  useEffect(() => {
    const prices = [];
    gadgets.map((g) => {
      if (cart.includes(g.product_id)) {
        prices.push(g.price);
      }
    });
    let cost = 0;
    for (let i = 0; i < prices.length; i++) {
      cost += prices[i];
    }

    setTotalCost(cost);
  }, [cart, gadgets]);

  // Function for removing items from cart
  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((id) => id !== item));
  };

  // Purchase function
  const purchase = () => {
    const total = totalCost;
    setTotalInModal(total);
    document.getElementById('my_modal_3').showModal();
    setCart([]);
  };

  return (
    <div className="flex w-full flex-col gap-8 bg-bgcol px-4 pb-16 pt-12">
      <div className="mx-auto flex w-full max-w-page-width flex-row flex-wrap items-center justify-between">
        <h5 className="text-2xl font-bold">Cart</h5>
        <div className="flex flex-row flex-wrap items-center gap-6">
          <h5 className="text-2xl font-bold">Total cost: {formatNumber(totalCost)}</h5>
          <div className="flex flex-row flex-wrap gap-4">
            <button className="btn btn-outline rounded-full border-primary text-lg font-semibold text-primary hover:bg-primary hover:text-white">
              Sort by Price <TuneIcon />
            </button>
            <button onClick={()=> purchase()} className={`btn rounded-full bg-primary text-lg font-semibold text-white hover:text-txtcol ${totalCost === 0 && "btn-disabled"}`}>
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-page-width flex-col gap-6">
        {gadgets.map((gadget) => {
          if (cart.includes(gadget.product_id)) {
            return (
              <div
                key={gadgets.indexOf(gadget)}
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
          }
        })}
      </div>
      {/* Payment successful notification modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col items-center text-center gap-6">
          <div>
            <img src="/successfull-icon.png" alt="successful-icon" />
          </div>
          <h3 className="font-bold text-2xl">Payment Successful</h3>
          <div className="flex flex-col gap-4 w-full items-center">
            <p className="font-medium text-base opacity-60">Thanks for purchasing.</p>
            <p className="font-medium text-base opacity-60">Total: {formatNumber(totalInModal)}</p>
            <form method="dialog" className="w-full">
              <Link to="/">
                <button className="btn btn-ghost btn-active rounded-full w-full">Close</button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
