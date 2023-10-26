import React from "react";
import phoneImg from "../assets/phone-img.png";
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

const Contact = () => {
  const dispatch = useDispatch();
  return (
    <section className=" mb-10 lg:mb-32">
      <motion.div
        className=" text-center text-xl text-[#210F60] font-bold mb-7 lg:text-4xl lg:font-extrabold lg:mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "5vh" },
        }}
      >
        Join Us & Grow Your Business Faster
      </motion.div>
      <motion.div
        className=" flex items-center gap-2 justify-center bg-[#1DCF9F] w-4/5 lg:w-[45%] mx-auto rounded-full text-white py-3"
        variants={buttonVariants}
        whileHover="hover"
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap="tap"
      >
        <img src={phoneImg} alt="phone-Img" className=" w-10 lg:w-16" />
        <button
          className=" text-2xl lg:text-3xl font-bold lg:font-extrabold"
          onClick={() => dispatch(openModal())}
        >
          Contact OPay
        </button>
      </motion.div>
    </section>
  );
};

export default Contact;
