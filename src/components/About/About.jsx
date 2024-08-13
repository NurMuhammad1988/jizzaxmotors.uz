import React from "react";
import carPng from "../../assets/car1.png";
const About = () => {
    return (
        <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center ">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <div data-aos="slide-right" data-aos-duration="1500">
                        <img
                            src={carPng}
                            alt="carPng"
                            className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>
                    <div>
                        <div className="space-y-5 sm:p-16 pb-6 ">
                            {/* data aoslarni tepadagi divga bitta qilib bersaham bo'ladi sal boshqacha chiqadi yani butin div duration bo'ladi birdaniga */}
                            <h1
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="text-3xl sm:text-4xl font-bold font-serif"
                            >
                                Biz haqimizda Jizzax Nur
                            </h1>
                            <p data-aos="fade-up" data-aos-duration="1500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Iusto quibusdam et porro.,alakop
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1500">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dignissimos, perspiciatisss.m,maksjas
                            </p>

                            <button
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="button-outline"
                            >
                                Get Started with Jizzax Nur
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
