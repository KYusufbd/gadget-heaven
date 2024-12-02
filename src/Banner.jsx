const Banner = () => {
    return (
        <>
            <div className="w-11/12 mx-auto bg-primary rounded-xl pt-12 pb-64 px-6 flex flex-col items-center gap-8">
                <div className="flex flex-col w-full items-center gap-6">
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-center text-white max-w-banner-width">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="text-white text-base text-center max-w-3xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="btn bg-white text-primary font-bold text-xl">Shop Now</div>
            </div>
            <div className="mx-auto max-w-banner-width p-8 border-4 border-solid border-white bg-[#ffffff4d] rounded-3xl relative -top-56">
                <img src="/banner.jpg" alt="gadget-image" className="rounded-2xl"/>
            </div>
        </>
    );
};

export default Banner;