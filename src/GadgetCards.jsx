import { useContext, useState } from "react";
import { useEffect } from "react";
import { GadgetContext } from "./App";
import { Link } from "react-router";

const GadgetCards = () => {
  const [categories, setCategories] = useState([]);
  const [display, setDisplay] = useState([]);
  const gadgets = useContext(GadgetContext);

  useEffect(() => {
    const categs = [];
    gadgets.map((e) => {
      if (!categs.includes(e.category)) {
        categs.push(e.category);
      }
    });
    setCategories(categs);
    setDisplay(gadgets);
  }, [gadgets]);

  // Filter by category function:
  const filterByCategory = (c) => {
    setDisplay(gadgets.filter((g) => g.category === c));
  };

  return (
    <div className="mx-auto grid max-w-page-width grid-cols-2 gap-4 py-8 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <div className="col-span-2 flex flex-col gap-6 rounded-2xl bg-white p-6 md:col-span-1">
        <button
          onClick={() => setDisplay(gadgets)}
          className="btn btn-ghost w-full bg-bgcol text-lg font-medium hover:bg-secondary hover:font-extrabold hover:text-white"
        >
          All Product
        </button>
        {categories.map((e) => {
          return (
            <button
              onClick={() => filterByCategory(e)}
              className="btn btn-ghost w-full bg-bgcol text-lg font-medium hover:bg-secondary hover:font-extrabold hover:text-white"
              key={categories.indexOf(e)}
            >
              {e}
            </button>
          );
        })}
      </div>
      <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
        {display.map((p) => {
          return (
            <div
              key={p.product_id}
              className="flex h-96 flex-col gap-6 rounded-2xl bg-white p-5"
            >
              <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={p.product_image}
                  alt="gadget-item-image"
                  className="h-full min-w-full"
                />
              </div>
              <div className="stretch-h flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="text-2xl font-semibold">{p.product_title}</h5>
                  <p className="font-medium opacity-60">Price: {p.price}$</p>
                </div>
                <Link to={'details/'+p.product_id}>
                  <button className="btn btn-ghost border-secondary text-lg font-semibold text-secondary">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GadgetCards;
