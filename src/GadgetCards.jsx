import { useState } from "react";
import { useEffect } from "react";

const GadgetCards = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data))
  }, []);

    useEffect(() => {
        const categs = [];
    gadgets.map(e => {
        if (!categs.includes(e.category)) {
            categs.push(e.category);
        };
    });
    setCategories(categs);
    }, [gadgets])

  return (
    <div className="mx-auto grid max-w-page-width grid-cols-2 gap-4 py-8 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <div className="col-span-2 md:col-span-1">
        {categories.map(e => {
            return(
                <button className="btn btn-ghost" key={categories.indexOf(e)}>{e}</button>
            )
        })}
      </div>
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-3 lg:grid-cols-3">
        {gadgets.map((p) => {
          return (
            <div key={p.product_id} className="flex flex-col gap-6 rounded-2xl bg-white p-5 h-96">
              <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={p.product_image}
                  alt="gadget-item-image"
                  className="h-full min-w-full"
                />
              </div>
              <div className="flex flex-col gap-4 stretch-h justify-between">
                <div className="flex flex-col gap-3">
                  <h5 className="text-2xl font-semibold">{p.product_title}</h5>
                  <p className="font-medium opacity-60">Price: {p.price}$</p>
                </div>
                <button className="btn btn-ghost text-secondary border-secondary">View Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GadgetCards;

// {
//     "product_id": "P002",
//     "product_title": "Samsung Galaxy Z Fold5",
//     "product_image": "https://img.freepik.com/premium-photo/all-screen-smartphone-with-icon-set-isolated-white-3d-render_118047-2162.jpg?w=740",
//     "category": "Smartphones",
//     "price": 1799,
//     "description": "The Samsung Galaxy Z Fold5 brings foldable technology to the next level.",
//     "specification": [
//         "7.6-inch foldable Dynamic AMOLED display",
//         "Snapdragon 8 Gen 2",
//         "Dual battery with fast charging",
//         "256GB to 1TB storage"
//     ],
//     "availability": true,
//     "rating": 4.6
// }
