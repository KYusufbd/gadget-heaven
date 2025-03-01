import { useContext } from "react";
import GadgetContext from "./GadgetContext";
import { DashboardContext } from "./DashboardContext";
import CloseIcon from "@mui/icons-material/Close";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const items = useContext(GadgetContext);
  const { addToCart, wishlist, removeFromWishlist, formatNumber } =
    useContext(DashboardContext);

  return (
    <div className="flex w-full flex-col gap-8 bg-bgcol px-4 pb-16 pt-12">
      <Helmet>
        <title>Wishlist | Gadget Heaven</title>
      </Helmet>
      <div className="mx-auto flex w-full max-w-page-width flex-row justify-between">
        <h5 className="text-2xl font-bold">Wishlist</h5>
      </div>
      <div className="mx-auto flex w-full max-w-page-width flex-col gap-6">
        {wishlist.map((id) => {
          const gadget = items.find((item) => item.product_id === id);
          return (
            <div
              key={`wishList-${id}`}
              className="flex flex-row flex-wrap gap-8 rounded-2xl bg-white p-8"
            >
              <div className="flex h-48 w-52 items-center justify-center overflow-hidden rounded-xl">
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
                <button
                  onClick={() =>
                    addToCart(gadget.product_id, gadget.price, true)
                  }
                  className={`btn w-max rounded-full bg-primary px-5 py-3 text-lg font-bold text-white hover:bg-primary hover:opacity-70 ${+!gadget?.availability && "btn-disabled"}`}
                >
                  Add To Cart
                </button>
              </div>
              <button
                onClick={() => removeFromWishlist(gadget.product_id)}
                className="border-2px ml-auto h-fit rounded-full border border-red-500"
              >
                <CloseIcon className="text-red-500" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
