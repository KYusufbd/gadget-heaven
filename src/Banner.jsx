const Banner = () => {
  return (
    <>
      <div className="mx-auto flex w-11/12 flex-col items-center gap-8 rounded-xl bg-primary px-6 pb-72 pt-12">
        <div className="flex w-full flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl max-w-banner-width text-center font-bold text-white lg:text-[56px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base max-w-3xl text-center text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="text-xl btn bg-white font-bold text-primary">
          Shop Now
        </div>
      </div>
      <div className="mx-auto -mt-64 max-w-banner-width rounded-3xl border-2 border-solid border-white bg-[#ffffff4d] p-8">
        <img src="/banner.jpg" alt="gadget-image" className="rounded-2xl" />
      </div>
    </>
  );
};

export default Banner;
