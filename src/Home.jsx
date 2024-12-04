import Banner from "./Banner";
import GadgetCards from "./GadgetCards";

const Home = () => {
  return (
    <>
      <header className="w-full bg-bgcol">
        <Banner />
        <GadgetCards />
      </header>
    </>
  );
};

export default Home;
