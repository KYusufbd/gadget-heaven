import { useParams } from "react-router";
import Banner from "./Banner";
import GadgetCards from "./GadgetCards";

const Home = () => {

  const p = useParams();
  return (
    <>
      <header className="w-full bg-bgcol">
        <Banner />
        <GadgetCards category="p.category"/>
      </header>
    </>
  );
};

export default Home;
