import { useContext, useState } from "react";
import { useParams } from "react-router";
import GadgetContext from "./GadgetContext";

const Details = () => {
  const [gadget, setGadget] = useState({});
  const gadgets = useContext(GadgetContext); // Problem: can't use GadgetContex.
  const p = useParams();
  const selectedGadget = gadgets.find(g => g.product_id === p.gadgetId);
  // setGadget(selectedGadget);

  // Testing perpose only:
  console.log(GadgetContext);
  
  return(
    <h1 className="text-3xl text-center font-bold">Details of product: {p.gadgetId}</h1>
  );
};

export default Details;
