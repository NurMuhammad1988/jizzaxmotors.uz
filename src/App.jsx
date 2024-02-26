import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


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

    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} />
           <Hero/>
        </div>
    );
};

export default App;
