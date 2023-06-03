import { Fragment } from "react";
import { FaBars, FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaListUl, FaShoppingBasket, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 uppercase">
                    {
                        isAdmin ? <Fragment>
                            <li><NavLink to="/"> <FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additems"> <FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"> <FaListUl></FaListUl> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/managebookings"> <FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"> <FaUsers></FaUsers> All Users</NavLink></li>
                        </Fragment> :
                            <Fragment>
                                <li><NavLink to="/"> <FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/reservation"> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink to="/history"> <FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                            </Fragment>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu"><FaBars></FaBars>Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBasket></FaShoppingBasket>Order</NavLink></li>
                    <li><NavLink to="/contact"><FaEnvelope></FaEnvelope>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard