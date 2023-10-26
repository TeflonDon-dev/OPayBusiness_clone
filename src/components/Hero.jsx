import React from "react";
import BannerImage from "../assets/opay-banner.png";
import CBNlogo from "../assets/CBNLogo.png";
import NDIClogo from "../assets/NDIClogo.png";
import { openModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <section className=" lg:bg-[#eff1ee] flex flex-col gap-5 lg:flex-row-reverse lg:gap-0 items-center lg:h-screen lg:items-center">
      <motion.div
        className="bg-[#E6F7EE] lg:bg-inherit lg:w-full lg:h-full lg:relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <img
          src={BannerImage}
          alt="Banner-Image"
          className=" object-cover lg:absolute lg:bottom-0 lg:right-0 lg:max-w-3xl"
        />
      </motion.div>
      <motion.div
        className=" mx-6 md:p-3 lg:pl-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1.5, delay: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <h2 className="text-[#210F60] text-3xl font-bold md:text-6xl lg:font-extrabold lg:text-5xl lg:tracking-wide">
          Reliable, Fast & Safe Payments
        </h2>
        <p className="text-[#210f60] my-5 md:text-3xl  lg:my-8 text-lg lg:text-xl">
          Get omnichannel payment solutions to grow your business better!
        </p>
        <div className=" mb-5 text-[#575757] lg:hidden">
          <p className=" flex items-center gap-2 ">
            Fully Licensed by the CBN{" "}
            <img src={CBNlogo} alt="CBNlogo" className=" w-7" />
          </p>
          <p className=" flex items-center gap-2 ">
            Deposits Insures by{" "}
            <img src={NDIClogo} alt="NDIClogo" className=" w-7" />
          </p>
        </div>
        <div>
          <motion.button
            className=" px-10 py-2 md:px-12 md:py-3 md:font-extrabold md:text-2xl md:rounded-full rounded-3xl bg-[#1DCF9F] text-white text-lg font-bold"
            onClick={() => dispatch(openModal())}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact Us
          </motion.button>
        </div>
        <div className=" hidden lg:flex lg:items-center  lg:mt-20">
          <p className="flex items-center gap-1 font-bold">
            Licensed by CBN <img src={CBNlogo} alt="CBNlogo" className=" w-7" />
          </p>
          &nbsp; | &nbsp;
          <p className="flex items-center gap-1 font-bold">
            Insured by <img src={NDIClogo} alt="NDIClogo" className="w-10" />
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
