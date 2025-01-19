import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import GadgetContext from "./GadgetContext";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const gadgets = useContext(GadgetContext);
  const { cart, setCart, formatNumber } = useContext(DashboardContext);
  const [totalCost, setTotalCost] = useState(0);

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

    setTotalCost(formatNumber(cost));
  }, [cart, gadgets]);

  // Function for removing items from cart
  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((id) => id !== item));
  };

  return (
    <div className="flex w-full flex-col gap-8 bg-bgcol px-4 pb-16">
      <div className="mx-auto flex w-page-width max-w-full flex-row justify-between">
        <h5 className="text-2xl font-bold">Cart</h5>
        <div>
          <h5 className="text-2xl font-bold">Total cost: {totalCost}</h5>
        </div>
      </div>
      <div className="mx-auto flex max-w-page-width flex-col gap-6">
        {gadgets.map((gadget) => {
          if (cart.includes(gadget.product_id)) {
            return (
              <div
                key={gadgets.indexOf(gadget)}
                className="flex flex-row gap-8 rounded-2xl bg-white p-8"
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
                  className="border-2px ml-auto h-fit rounded-full border border-red-500"
                >
                  <CloseIcon className="text-red-500" />
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
