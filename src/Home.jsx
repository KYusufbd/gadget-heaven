import { useParams } from "react-router";
import Banner from "./Banner";
import GadgetCards from "./GadgetCards";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const p = useParams();
  const category = p.category;

  return (
    <>
      <Helmet>
        <title>{category ? `${category} | Gadget Heaven` : "Gadget Heaven"}</title>
      </Helmet>
      <header className="w-full bg-bgcol">
        <Banner />
        <GadgetCards category={category} />
      </header>
    </>
  );
};

export default Home;
