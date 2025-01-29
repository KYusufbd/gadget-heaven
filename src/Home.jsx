import { useParams } from "react-router";
import Banner from "./Banner";
import GadgetCards from "./GadgetCards";
import { useContext, useEffect } from "react";
import TitleContext from "./TitleContext";

const Home = () => {
  const p = useParams();
  const category = p.category;
  const {setTitle} = useContext(TitleContext);

  useEffect(() => {
    setTitle(category ? `${category} | Gadget Heaven` : "Gadget Heaven");
  }, [category, setTitle]);

  return (
    <>
      <header className="w-full bg-bgcol">
        <Banner />
        <GadgetCards category={category} />
      </header>
    </>
  );
};

export default Home;
