import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
            <div className="container ">
                <div className="grid md:grid-cols-3 py-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Car Rental</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus temporibus voluptatem corrupti ullam rem fuga impedit.</p>
                        <br />
                        <div>
                            {/* <FaLacationArrow/> */}
                            <p>Noida, Utter, Pradesh</p>
                        </div>
                        <div>
                            {/* <FaMoileAlt/> */}
                            <a href="">+998 91 590 04 06</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
