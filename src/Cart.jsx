import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import GadgetContext from "./GadgetContext";
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {
  const gadgets = useContext(GadgetContext);
  const { cart, setCart } = useContext(DashboardContext);
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
    for(let i = 0; i < prices.length; i++) {
      cost += prices[i];
    }
    setTotalCost(cost);
  }, [cart, gadgets]);

  // Function for removing items from cart
  const removeFromCart = (item) => {
    const updatedCart = [];
    cart.map(i => {
      !i === item && updatedCart.push(i);
    })
    setCart(updatedCart);
  };

  return (
    <div className="flex w-full flex-col gap-8 bg-bgcol px-4">
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
              <div key={gadgets.indexOf(gadget)} className="flex flex-row bg-white p-8 rounded-2xl gap-8">
                <div className="w-52 h-32 overflow-hidden rounded-xl aspect-square flex justify-center items-center">
                  <img className="w-full min-h-full" src={gadget?.product_image} alt="gadget-image" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">
                    {gadget?.product_title}
                  </h1>
                  <p className="text-lg opacity-60">{gadget?.description}</p>
                  <p className="text-xl font-semibold opacity-80">
                    Price: ${gadget?.price}
                  </p>
                </div>
                <button onClick={() => removeFromCart(gadget.product_id)}>
                  <CloseIcon/>
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
