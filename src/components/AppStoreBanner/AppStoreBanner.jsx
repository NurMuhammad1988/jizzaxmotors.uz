import React from "react";
import pattern from "../../assets/website/pattern.jpeg";
import PlayStoreImg from "../../assets/website/play_store.png";
import AppStoreImg from "../../assets/website/app_store.png";

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    // shunday qilibham alohida style bersa bo'ladi yani o'zgaruvchi ochib objectni ichiga yzish kerak
};

const AppStoreBanner = () => {
    return (
        <div className="container pb-14">
            <div
                className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
                style={bannerImg}
            >
                <div>
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="400"
                            className="text-2xl text-center sm:text-4xl font-semibold font-serif"
                        >
                            Get Started with our App
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-center sm:px-20 "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus qui maxime culpa ipsum id? Est, nam.
                        </p>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="flex flex-wrap justify-center items-center gap-4"
                        >
                            <a href="#">
                                <img
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                    src={PlayStoreImg}
                                    alt=""
                                />
                            </a>

                            <a href="#">
                                <img
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                    src={AppStoreImg}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStoreBanner;
