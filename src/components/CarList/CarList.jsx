import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const CarListData = [
    {
        id: 1,
        name: "BMW UX",
        price: 100,
        image: car1,
        aosDelay: "0",
    },

    {
        id: 2,
        name: "KIA UX",
        price: 140,
        image: car2,
        aosDelay: "200",
    },

    {
        id: 3,
        name: "BMW UX",
        price: 100,
        image: car3,
        aosDelay: "400",
    },
];

const CarList = () => {
    return (
        <div id="cars" className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
            <div className="container">
                {/*heading*/}
                <h1
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
                >
                    Lorem, ipsum dolor...
                </h1>
                <p data-aos="fade-up" className="text-sm pb-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias sapiente inventore dolore.
                </p>
                {/* Car listing cards */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                        {CarListData.map((CarListData) => {
                            return (
                                <div
                                    key={CarListData.id}
                                    data-aos="fade-up"
                                    data-aos-delay={CarListData.aosDelay}
                                    className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group "
                                >
                                    <div className="w-full h-[120px]">
                                        <img
                                            className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                                            src={CarListData.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="text-primary font-semibold ">
                                            {CarListData.name}
                                        </h1>

                                        <div className="flex justify-between items-center text-xl fonts">
                                            <p>${CarListData.price}/Day</p>
                                            <a href="#">Details</a>
                                        </div>
                                    </div>
                                    <p className=" text-xl font-semibold absolute top-0 left-3">
                                        12Km
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* end of car listing cards */}
                <div className="grid place-content-center mt-8">
                    <button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="button-outline   "
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarList;
