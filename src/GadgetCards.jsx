import { useState } from "react";
import { useEffect } from "react";

const GadgetCards = () => {
  const [gadgets, setGadgets] =useState([])

  useEffect(() => {
    fetch('gadgets.json')
    .then( res => res.json())
    .then(data => setGadgets(data));
  }, [])
  console.log(gadgets); //Testing perpose only. Should be removed later.
  return (
    <div className="mx-auto grid max-w-page-width grid-cols-2 gap-4 bg-sky-100 py-8 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <div className="col-span-2 h-56 bg-sky-50 md:col-span-1">
        <h3 className="text-xl">This is categories side bar</h3>
      </div>
      <div className="col-span-2 h-56 bg-yellow-200 lg:col-span-3">
        <h3 className="text-xl">This is gadget cards portion</h3>
      </div>
    </div>
  );
};

export default GadgetCards;
