import CheckIcon from "@mui/icons-material/Check";

const About = () => {
  return (
    <div className="dashboard w-full bg-bgcol">
      <div className="flex flex-col gap-6 bg-primary px-5 py-12 text-center text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">About Gadget Heaven</h1>
          <h3 className="text-2xl font-bold">
            Welcome to Gadget Heaven – Your Ultimate Tech Destination!
          </h3>
          <p className="mx-auto max-w-3xl text-base">
            At Gadget Heaven, we believe technology should be exciting,
            accessible, and innovative. Whether you’re a tech enthusiast, a
            gamer, or someone who loves the latest gadgets, we’ve got everything
            you need to upgrade your experience.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-5 py-12 text-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="mx-auto max-w-3xl text-justify text-base">
            We aim to bring you the best in smart devices, must-have
            accessories, and cutting-edge gadgets that enhance your daily life.
            Our carefully curated collection ensures you get top-quality
            products at unbeatable prices.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Why Choose Us?</h3>
          <ul className="text-start">
            <li className="mx-auto max-w-3xl text-base">
              <CheckIcon /> <strong>Latest & Trendiest Gadgets</strong> – We
              stay ahead of the curve to offer you the newest tech.
            </li>
            <li className="mx-auto max-w-3xl text-base">
              <CheckIcon /> <strong>Premium Quality</strong> – Every product is
              handpicked for performance and reliability.
            </li>
            <li className="mx-auto max-w-3xl text-base">
              <CheckIcon /> <strong>Affordable Prices</strong> – High-quality
              gadgets don’t have to break the bank.
            </li>
            <li className="mx-auto max-w-3xl text-base">
              <CheckIcon /> <strong>Exceptional Support</strong> – Our customer
              service team is always ready to help.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Join the Tech Revolution!</h3>
          <p className="mx-auto max-w-3xl text-justify text-base">
            At Gadget Heaven, we don’t just sell gadgets—we create an
            experience. Explore our collection and discover how the right tech
            can transform your world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
