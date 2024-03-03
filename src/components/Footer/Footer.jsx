import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
    FaTelegramPlane 
} from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },

    {
        title: "About",
        link: "/#about",
    },

    {
        title: "Contact",
        link: "/#contact",
    },

    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
            <div className="container ">
                <div className="grid md:grid-cols-3 py-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">
                            Car Rental
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Delectus temporibus voluptatem corrupti ullam
                            rem fuga impedit.
                        </p>
                        <br />
                        <div className="flex  items-center  gap-3">
                            <FaLocationArrow />
                            <p>Noida, Utter, Pradesh</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />

                            <a className="mt-2 hover:text-primary text-indigo-500" href="tel:+998915900406">+998915900406</a>

                        </div>
                        {/* Social Handles */}
                        <div className="flex items-center gap-3 mt-6  ">

                        <a target="_blank" href="https://t.me/NurMuhammad_1416">
                                <FaTelegramPlane className="text-3xl hover:text-primary duration-300" />
                            </a>

                            <a href="#">
                                <FaInstagram className="text-3xl hover:text-primary duration-300" />
                            </a>

                            <a href="#">
                                <FaFacebook className="text-3xl hover:text-primary duration-300" />
                            </a>

                            <a href="#">
                                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                            </a>

                           
                        </div>
                    </div>
                    {/* Navlinks */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
                        {/* First col */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((data) => {
                                        return (
                                            <li
                                                className="cursor-pointer hover:text-primary duration-300"
                                                key={data.title}
                                            >
                                                <span className="mr-2">
                                                    &#11162;
                                                </span>
                                                {/* tepadagi shu narsa &#11162; Unicode belgisi deyilarkan buni chapga o'ngga pastga tepaga qilish mumkun ekan kodini o'zgartirib shu kodni ggoglega yozsang har hillari bor ekan turli tuman linki => https://www.compart.com/en/unicode/  */}
                                                <a href={data.link}>
                                                    {data.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* Second col */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((data) => {
                                        return (
                                            <li 
                                                className="cursor-pointer hover:text-primary duration-300"
                                                key={data.title }
                                            >
                                                <span id="font-family_Droid" className="mr-2 ">
                                                    &#11162;
                                                </span>
                                                {/* tepadagi shu narsa &#11162; Unicode belgisi deyilarkan buni chapga o'ngga pastga tepaga qilish mumkun ekan kodini o'zgartirib shu kodni ggoglega yozsang har hillari bor ekan turli tuman linki => https://www.compart.com/en/unicode/  */}
                                                <a href={data.link}>
                                                    {data.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* Third col */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((data) => {
                                        return (
                                            <li
                                                className="cursor-pointer hover:text-primary duration-300"
                                                key={data.title}
                                            >
                                                <span className="mr-2">
                                                    &#11162;
                                                </span>
                                                {/* tepadagi shu narsa &#11162; Unicode belgisi deyilarkan buni chapga o'ngga pastga tepaga qilish mumkun ekan kodini o'zgartirib shu kodni ggoglega yozsang har hillari bor ekan turli tuman linki => https://www.compart.com/en/unicode/  */}
                                                <a href={data.link}>
                                                    {data.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
