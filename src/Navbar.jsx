import { Link, NavLink } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="navbar items-center my-6 w-11/12 max-w[1540px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul className="font-medium menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="font-bold text-xl">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row gap-12 font-medium">
                    <li><NavLink to='/' className={({isActive}) => isActive ? 'text-red-500 font-bold' : 'text-black'}>Home</NavLink></li>
                    <li><NavLink to='/statistics' className={({isActive}) => isActive ? 'text-red-500 font-bold' : 'text-black'}>Statistics</NavLink></li>
                    <li><NavLink to='/dashboard' className={({isActive}) => isActive ? 'text-red-500 font-bold' : 'text-black'}>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <BsCart3 className="text-5xl outline-2 outline-gray-100 outline rounded-full p-2 btn btn-ghost"/>
                <MdFavoriteBorder className="text-5xl outline-2 outline-gray-100 outline rounded-full p-2 btn btn-ghost"/>
            </div>
        </nav>
    );
};

export default Navbar;
