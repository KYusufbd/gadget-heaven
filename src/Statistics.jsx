import { useContext } from "react";
import {
  ComposedChart,
  Area,
  Bar,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import GadgetContext from "./GadgetContext";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const gadgets = useContext(GadgetContext);

  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className="flex flex-col gap-8 bg-primary px-5 py-8 text-center text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Statistics</h1>
          <p className="mx-auto max-w-3xl text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 bg-bgcol px-4 pb-16 pt-12">
        <div className="mx-auto flex w-full max-w-page-width flex-row justify-between">
          <h5 className="text-2xl font-bold">Statistics</h5>
        </div>
        <div className="mx-auto h-96 w-full max-w-page-width">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={gadgets}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" scale="band" />
              <YAxis dataKey="price" scale="auto" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={20} fill="#413ea0" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
