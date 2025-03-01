import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="bg-bgcol pt-9">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-8 rounded-xl bg-primary px-6 pb-72 pt-32">
        <div className="flex w-full flex-col items-center gap-6">
          <h1 className="max-w-banner-width text-center text-4xl font-bold text-white md:text-5xl lg:text-[56px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="max-w-3xl text-center text-base text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <Link to="/dashboard/cart">
          <button className="btn bg-white text-xl font-bold text-primary">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="mx-auto -mt-64 max-w-banner-width rounded-3xl border-2 border-solid border-white bg-bgcol p-8">
        <img src="/banner.jpg" alt="gadget-image" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default Banner;
