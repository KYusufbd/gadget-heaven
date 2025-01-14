import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="dashboard w-full bg-bgcol">
      <div className="flex flex-col gap-8 bg-primary px-5 py-8 text-center text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mx-auto max-w-3xl text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="mx-auto flex flex-row gap-6">
          <NavLink to={"/dashboard/cart"}>
            <button className="btn rounded-full bg-transparent px-16 py-3 font-medium text-white hover:font-bold hover:text-primary">
              Cart
            </button>
          </NavLink>
          <NavLink to={"/dashboard/wishlist"}>
            <button className="btn rounded-full bg-transparent px-16 py-3 font-medium text-white hover:font-bold hover:text-primary">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
