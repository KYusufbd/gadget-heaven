import { useParams } from "react-router";

const Details = () => {
  const p = useParams();
  return(
    <h1 className="text-3xl text-center font-bold">Details of product: {p.gadgetId}</h1>
  );
};

export default Details;
