import React from "react";

const Contact = () => {
    return (
        <div
            id="booking"
            data-aos="zoom-in"
            className="dark:bg-black dark:text-white py-14 "
        >
            <div className="container ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 rounded-xl">
                    <div className="col-span-2 space-y-3">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">
                            Jizzax Nur bilan unutilmas sayohatni boshlang
                        </h1>
                        <h2 className="text-gray-400">
                            Jizzax Nur bilan boshlash oson
                        </h2>
                    </div>
                    <div className="grid place-items-center">
                        <a
                            className="inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300 hover:text-black"
                            href="#"
                        >
                            Jizzax Nur bilan Bog'lanish
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
