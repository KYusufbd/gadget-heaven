import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
    return (
        <div className="w-full bg-bgcol dashboard">
            <div className="flex flex-col gap-8 text-center bg-primary px-5 py-8 text-white">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="mx-auto max-w-3xl text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="flex flex-row gap-6 mx-auto">
                    <NavLink to={"/dashboard/cart"}>
                        <button className="btn px-16 py-3 rounded-full font-medium text-white bg-transparent hover:text-primary hover:font-bold">Cart</button>
                    </NavLink>
                    <NavLink to={"/dashboard/wishlist"}>
                        <button className="btn px-16 py-3 rounded-full font-medium text-white bg-transparent hover:text-primary hover:font-bold">Wishlist</button>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;