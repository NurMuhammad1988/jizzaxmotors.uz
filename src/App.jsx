import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "aos/dist/aos.css"; //bu sahifa refresh bo'lganda  ekranda sekiin ko'rinadigan qileydigan kichik kutubhona buni agar mobodo shu repasitoriyni githubdan qayta yuklaganda ishlamasa qaytadan aosni o'rnatishga to'g'ri kelishi mumkun lekin package jsonda shunday turipti "aos": "^2.3.4" mobodo ishlamasa qaytadan istall qilish kerak bo'ladi
import Aos from "aos";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Testimonial from "./components/Testimonial/Testimonial";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";

const App = () => {
    //darkmode uchun qilindi lekin aslida bundan ancha oson usulllari bor tailwindni o'zida
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    //darkmode uchun qilindi lekin aslida bundan ancha oson usulllari bor tailwindni o'zida

    //aosni ishlatish

    React.useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        Aos.refresh();
    }, []);

    //aosni ishlatish

    return (
        <div className="bg-white dark:bg-black dark:text-white">
            {/* shu divga berilgan darkmode styleni boshqa companentlardan olib tashlab shu joyga qisqagina qilib yozib qo'yish mumkun edi badyga tasir qilavorardi */}
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero theme={theme} />
            <About />
            <Services />
            <CarList />
            <Testimonial />
            <AppStoreBanner />
            <Contact />
        </div>
    );
};

export default App;

// 01:49:03