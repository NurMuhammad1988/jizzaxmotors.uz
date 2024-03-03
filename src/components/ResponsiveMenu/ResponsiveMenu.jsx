import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "../Navbar/Navbar";
// import { NavLinks } from "../Navbar/Navbar"; shu tepadagi o'zgaruvchi import qilib olib kelindi uyoqdan esa constdan avval export yozib export qilindi

 const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div
            className={`${showMenu ? "left-0" : "-left-full"}
        fixed top-0 z-50 bg-white dark:bg-dark
        h-screen  lg:w-[40%]   md:shadow-current md:bg-slate-100  rounded-r-xl shadow-md flex  flex-col justify-between px-8 pb-6 pt-3 transition-all duration-300`}
        >
            <div className="card ">
                <div className="flex items-center justify-start gap-4">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello User</h1>
                        <h1 className="text-primary">Premium user</h1>
                    </div>
                </div>
                {/* Links */}
                <nav className="mt-3">
                    <ul className="space-y-2 text-xl ">
                        {NavLinks.map((data) => (
                            <li key={data.id}>
                                <a
                                    className=" hover:text-primary"
                                    href={data.link}
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Footer */}
            <div>
                <h1 >
                    Made with 🖤 by_
                    <a className="hover:text-cyan-600"
                        href="https://github.com/NurMuhammad1988/for-jizzax-motors-uz"
                        target="_blank"
                    >
                        Nur
                        <p className="hover:text-cyan-600">GitHub</p>
                    </a>
                </h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
