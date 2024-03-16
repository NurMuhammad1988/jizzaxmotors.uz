import React from "react";

const TestimonialsData = [
    //image:"" shunday turishi sababi pastda mapni ichida
    {
        name: "Dilshad",
        Image: "",
        direction: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        aosDelay: "0",
    },

    {
        name: "Satya",
        Image: "",
        direction: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        aosDelay: "300",
    },

    {
        name: "Sabir",
        Image: "",
        direction: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        aosDelay: "400",
    },
];

const Testimonial = () => {
    return (
        <div id="about" className="dark:bg-black dark:text-white py-14 sm:pb-24">
            <div className="container">
                {/* header */}
                <div data-aos="fade-up" className="space-y-4 pb-12">
                    <p className="text-3xl font-semibold text-center sm:text-4xl  font-serif">
                        What Our Clients Say About Us
                    </p>
                    <p data-aos="fade-up" className="text-center sm:px-44">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod perferendis ex voluptatem hic quaerat?
                    </p>
                </div>
                {/* card section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white ">
                    {TestimonialsData.map((data) => {
                        return (
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
                            key={data.name}>
                                <div className="grid place-items-center">
                                    <img
                                        className="h-20 w-20  rounded-full"
                                        src="https://picsum.photos/200"
                                        alt=""
                                        // src="https://picsum.photos/200" shu yahshi nars aekan dars qilayotganda shundaychaqirib qo'ysa bo'ldi ekan har refresh bo'lganda qayta qayta yangi rasm chiqaverar ekan classlarni esa hohlagandey berish mumkun dataga string malumot qilib chaqiribham ishlayverish mumkun ekan
                                    />
                                </div>
                                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                                {/* star emojilarni saytlardan topib kopiravat qilib qo'ysa bo'larkan */}
                                <p>{data.direction}</p>
                                <p className="font-semibold ">{data.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
