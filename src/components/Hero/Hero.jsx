import React from "react";
import carPng from "../../assets/car.png";
import yellowCarPng from "../../assets/banner-car.png";

// min-h-[] manashunday arrayni ichiga hohlagan sizeni yozish mumkun ekan bu boshqa har qanday klasdaham shunday  maslan rangda bg-[] shunday qilib arrayni ichiga rangni rgbasi yozilsa bo'ldi tailwindda bo'lmagan har qanday classlarni bemmalol tez va oson qo'shib keyish mumkun ekan yana misol mt-[] agar kerakli margin top tailwind classlari bo'lmasa [shu ichiga kerakli px bilan yozish kifoya] yani  mt-[27.49px] bu  deyarli hamma tailwind classlarda  ishlaydi

const Hero = ({ theme }) => {
    return (
        <div className=" dark:bg-black dark:text-white duration-1000 relative -z-1">
            {/* relative ishlatganda z indexlarga jiddiy etibor bilan ishlash kerak ekan bo'masa dark mode va hoverlarda muammo kelib chiqadi */}
            <div className="container min-h-[620px] flex">
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className="order-1 sm:order-2"
                    >
                        <img
                            className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
                            src={theme == "dark" ? carPng : yellowCarPng}
                            alt=""
                        />
                    </div>

                    <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="text-primary text-2xl font-serif"
                        >
                            Effortlees
                        </p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="text-5xl lg:text-7xl font-semibold font-serif"
                        >
                            Car Rental
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Delectus amet, id quis expedita quia sapiente
                            libero maiores voluptatibus!!!
                        </p>

                        <button
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/60 duration-300"
                        >
                            Get Started
                        </button>

                        <p 
                         data-aos="fade-up"
                         data-aos-duration="1500"
                        className="  hover:text-red-700 cursor-pointer duration-300">Darslik sayt faqat dars qilish, tajriba uchun yasalgan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
