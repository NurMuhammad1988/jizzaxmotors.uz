import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div className=" fixed top-0 z-50 bg-white dark:bg-gray-900
        h-screen w-[60%] md:hidden rounded-r-xl shadow-md">
            <div className="card ">
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello User</h1>
                        <h1>Premium user</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
