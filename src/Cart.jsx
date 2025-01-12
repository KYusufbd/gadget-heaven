import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";


const Cart = () => {
    const {cart, setCart} = useContext(DashboardContext);

    return (
        <h1 className="text-center text-2xl font-bold">This is Cart section!</h1>
    )
};

export default Cart;