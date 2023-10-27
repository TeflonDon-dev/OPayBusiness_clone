import React from "react";
import { motion } from "framer-motion";

const h2Variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Partners = () => {
  return (
    <section className="bg-[#F8F8FA] lg:bg-white p-6 mt-12 lg:mt-20">
      <motion.h2
        className=" text-[#210F60] font-bold lg:font-extrabold text-xl text-center md:text-4xl lg:text-6xl my-1 lg:my-4  "
        variants={h2Variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        Trusted by Over <span className=" text-[#1DCF9F]">1,000,000</span>
      </motion.h2>
      <motion.h2
        className=" text-[#210F60] font-bold lg:font-extrabold md:text-4xl text-xl text-center lg:text-6xl"
        variants={h2Variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1 }}
      >
        Bussinesses across Nigeria
      </motion.h2>
      <div className=" grid grid-cols-3 lg:grid-cols-6 items-center justify-center space-y-8 mt-5 gap-5">
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/Guinness-034d64dc.png"
            alt="Guiness-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/fedex-221c7ed0.png"
            alt="FedEx-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/Genesis-14bc5d26.png"
            alt="Genesis-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/Shafa-e238b878.png"
            alt="shafa-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/filmhouse-0f558696.png"
            alt="filmHouse-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/medplus-692c204e.png"
            alt="medplus-logo"
            className="w-20 md:w-24"
          />
        </div>

        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/H-MEDIX-a6f1ad59.png"
            alt="medix-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/market-square-9386afa4.png"
            alt="marketsquare-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/kilimanjar-d48915a9.png"
            alt="kilmanjaro-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/ELECTR-MART-3a393eee.png"
            alt="electromart-logo"
            className="w-20 md:w-24"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src="https://opaybusiness.opayweb.com/static/png/nettpharmacy-da46b4f6.png"
            alt="nettpharmacy-logo"
            className="w-20 md:w-24 "
          />
        </div>
        <div className=" flex items-center justify-center">and more...</div>
      </div>
    </section>
  );
};

export default Partners;
