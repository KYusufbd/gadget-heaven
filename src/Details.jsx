import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import GadgetContext from "./GadgetContext";
import { DashboardContext } from "./DashboardContext";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Details = () => {
  const [gadget, setGadget] = useState();
  const gadgets = useContext(GadgetContext);
  const { cart, setCart, wishlist, setWishlist, formatNumber } =
    useContext(DashboardContext);
  const p = useParams();

  // Add to cart function:
  function addToCart(itemId) {
    if (!cart.includes(itemId)) {
      setCart([...cart, itemId]);
    }
  }

  // Add to wishlist function:
  function addToWishlist(itemId) {
    if (!wishlist.includes(itemId)) {
      setWishlist([...wishlist, itemId]);
    }
  }

  useEffect(() => {
    setGadget(gadgets.find((g) => g.product_id === p.gadgetId));
  }, [gadgets, p.gadgetId]);

  // This code is to scroll to top when the route is changed.
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="w-full bg-bgcol pb-24">
        <div className="bg-primary px-5 pb-48 pt-8">
          <h1 className="text-center text-3xl font-bold text-white">
            Product Details
          </h1>
          <p className="mx-auto max-w-3xl text-center text-base text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="mx-auto -mt-32 flex w-11/12 max-w-page-width flex-row flex-wrap gap-8 rounded-3xl bg-white p-3 md:p-6 lg:gap-0 lg:p-8">
          <div className="flex items-center justify-center overflow-hidden rounded-2xl drop-shadow-xl lg:w-5/12">
            <img
              src={gadget?.product_image}
              alt="gadget-image"
              className="h-full"
            />
          </div>
          <div className="flex flex-col gap-6 lg:w-7/12 lg:pl-8">
            <h4 className="font-semibold">{gadget?.product_title}</h4>
            <p className="text-xl font-semibold">
              {"Price: " + formatNumber(gadget?.price)}
            </p>
            {gadget?.availability ? (
              <div className="w-max rounded-full border-2 border-green-600 bg-green-100 px-2 py-1 text-sm font-medium text-green-600">
                In Stock
              </div>
            ) : (
              <div className="w-max rounded-full border-2 border-warning bg-yellow-100 px-2 py-1 text-sm font-medium text-warning">
                Not Available
              </div>
            )}
            <p className="text-lg text-txtcol opacity-60">
              {gadget?.description}
            </p>
            <h6 className="text-lg font-bold">Specification:</h6>
            <ol className="list-decimal pl-5 text-lg opacity-60">
              {gadget?.specification?.map((s) => (
                <li key={gadget?.specification.indexOf(s)}>{s}</li>
              ))}
            </ol>
            <div className="flex flex-col gap-2">
              <h6 className="text-lg font-bold">
                Rating <StarHalfIcon color="action" />
              </h6>
              <div className="flex flex-row items-center gap-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={gadget?.rating}
                  readOnly
                />
                <div className="rounded-full bg-bgcol px-4 py-2 text-sm font-medium opacity-80">
                  {gadget?.rating}
                </div>
              </div>
              <div className="flex flex-row gap-2 md:gap-4">
                <button
                  onClick={() => addToCart(gadget.product_id)}
                  className={`btn w-max rounded-full bg-primary px-5 py-3 text-lg font-bold text-white hover:bg-primary hover:opacity-70 ${!gadget?.availability && "btn-disabled"}`}
                >
                  {!cart.includes(gadget?.product_id)
                    ? "Add To Cart"
                    : "Already Added"}
                  <ShoppingCartOutlinedIcon />
                </button>
                <button
                  onClick={() => addToWishlist(gadget.product_id)}
                  className="btn rounded-full bg-transparent p-3 outline outline-1"
                >
                  <FavoriteBorderOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

console.log(`
  You have to perform these tasks before submitting:
  Remove the lines below
  Use nested layout to display category.
  
  Performed tasks:
  Fix the problem in the MUI component Star.
  
  Status: Now time to use nested layout to display category.
  `);
/*
Development purpose only:
An object isntance:
{
    "product_id": "P005",
    "product_title": "Garmin Forerunner 265",
    "product_image": "https://img.freepik.com/free-vector/fitness-trackers-concept_23-2148529803.jpg?t=st=1730981984~exp=1730985584~hmac=4a412996bd2a2a4915478b269d4184b90a7fc66abd772bf61f2f9407e177c3e9&w=740",
    "category": "Wearables",
    "price": 399,
    "description": "Advanced GPS smartwatch designed for runners and athletes.",
    "specification": [
        "1.3-inch AMOLED display",
        "Multi-GNSS support",
        "Heart rate and SpO2 monitoring",
        "Up to 15 days battery life in smartwatch mode"
    ],
    "availability": true,
    "rating": 4.5
}
*/
