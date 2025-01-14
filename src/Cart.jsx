import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import GadgetContext from "./GadgetContext";


const Cart = () => {
    const gadgets = useContext(GadgetContext);
    const {cart, setCart} = useContext(DashboardContext);
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        gadgets.map(g => {
          if (cart.includes(g.product_id)) {
              setTotalCost(totalCost + g.price)
          }
      })
    }, [cart])
    

    return (
        <div className="flex flex-col gap-8 w-full bg-bgcol px-4">
            <div className="w-page-width max-w-full mx-auto flex flex-row justify-between">
                <h5 className="text-2xl font-bold">Cart</h5>
                <div>
                    <h5 className="text-2xl font-bold">Total cost: {totalCost}</h5>
                </div>
            </div>
            <div className="mx-auto max-w-page-width bg-white">
                {gadgets.map(gadget => {
                    if (cart.includes(gadget.product_id)) {
                        return (
                            <h1 className="text-2xl font-semibold">{gadget?.product_title}</h1>
                        )
                    }
                })}
            </div>
        </div>
    )
};

export default Cart;