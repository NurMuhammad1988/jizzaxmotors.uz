import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
// react iconlar /hi yoki /bi bo'lsa import qilinganda ishlameydi hato chiqaravo'radi shu sabab qaysi oilaga tegishli ekanligiga etibor berish kerak chynki iconni nomini yozgandan bitta import qatorga aftamatic tarzda yozib ketavo'radi lekin ishlameydi chunki oilasi ikki hil masalan bi/ yoki /hi shu sabab bir soat haoto izladim ohiti iconni o'zini saytiga kirib aynan o'shajoyidan alohida alohida import qildim
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";

//https://react-icons.github.io/react-icons/ shu saytda react uchun tayyor iconlar bor lekin buni terminalda chaqirish kerak ekan npm install react-icons --save <shunday ko'rinishda agar icon bittadan ko'p kerak bo'lsa >manabunday ko'rinishda yuklab qo'yish kerey npm install @react-icons/all-files --save lekin bunda local failni hajmi oshar ekan lekin har qanday iconni nomini yozsa o'zi podkas berib o'rnatib beradi

export const NavLinks = [
    //dynamic failni shunday qilib o'ziga kerakli joyda ochib qo'ysaham bo'larkan import qilshxam shart bo'masakan

    {
        id: "1",
        name: "HOME",
        link: "/#",
    },

    {
        id: "2",
        name: "CARS",
        link: "/#cars",
    },

    {
        id: "3",
        name: "ABOUT",
        link: "/#about",
    },

    {
        id: "4",
        name: "BOOKING",
        link: "/#booking",
    },
];

const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);

    const togglemenu = () => {
        setShowMenu(!showMenu);
    };


    

    //theme va setTheme darkmode uchun app.jsx faylida qilindi

    //tailwindda darkmode yahshi narsa ekan umumiy divlarni textlariga bg-lariga dark tema qo'shib ketish juda oson ekan alohoda css papkalar qilib o'tirish shart emas ekan

    return (
        <nav className="shadow-md dark:bg-dark dark:text-white duration-1000 relative z-40">
            {/* relative ishlatganda z indexlarga jiddiy etibor bilan ishlash kerak ekan bo'masa dark mode va hoverlarda muammo kelib chiqadi */}

            <div className=" container py-3 md:py-0 ">
                <div className="flex justify-between  items-center">
                    <div>
                        <h1 className="text-3xl font-bold font-serif">
                            Car Rental
                        </h1>
                    </div>

                    <div className="hidden md:block ">
                        <ul className="flex items-center gap-8">
                            {NavLinks.map((data) => (
                                <li className="py-4" key={data.id}>
                                    <a
                                        className=" py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                                        href={data.link}
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}

                            {/* Dark Mode Icons */}
                            {/* <div>
                                {theme === "dark" ? (
                                    <BiSolidSun
                                        onClick={() => setTheme("light")}
                                        className="text-2xl"
                                    />
                                ) : (
                                    <BiSolidMoon
                                        onClick={() => setTheme("dark")}
                                        className="text-2xl"
                                    />
                                )}
                            </div> */}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4 md:hidde">
                        {/* mobil format uchun dark mode */}
                        {theme === "dark" ? (
                            <BiSolidSun
                                onClick={() => setTheme("light")}
                                className="text-2xl"
                            />
                        ) : (
                            <BiSolidMoon
                                onClick={() => setTheme("dark")}
                                className="text-2xl"
                            />
                        )}

                        {/* mobil format uchun dark mode */}




                        {/* Mobile Hamburger menu (icon!) */}
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={togglemenu}
                                size={30}
                                className="cursor-pointer
                            transition-all"
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={togglemenu}
                                size={30}
                                className="cursor-pointer
                            transition-all"
                            />
                        )}
                    </div>

                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} />

        </nav>
    );
};

export default Navbar;
