import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import GadgetContext from "./GadgetContext";

const Details = () => {
  const [gadget, setGadget] = useState({});
  const gadgets = useContext(GadgetContext);
  const p = useParams();
  const selectedGadget = gadgets.find((g) => g.product_id === p.gadgetId);

  useEffect(() => {
    setGadget(selectedGadget);
  }, [selectedGadget]);

  // Testing perpose only:
  console.log(gadget);

  return (
    <h1 className="text-center text-3xl font-bold">
      Details of product: {p.gadgetId}
    </h1>
  );
};

export default Details;
