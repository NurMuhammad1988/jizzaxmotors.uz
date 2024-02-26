import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    const [theme, setTheme] = React.useState(
      localStorage.getItem("theme")?
      localStorage.getItem("theme"):"light"
      );
  
    return (
        <div>
            <Navbar theme={theme} setTheme=
            {setTheme} />
        </div>
    );
};

export default App;
  //darkmode uchun qilindi lekin aslida bundan ancha oson usulllari bor tailwindda