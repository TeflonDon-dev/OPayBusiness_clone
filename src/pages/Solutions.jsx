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
const Solutions = () => {
  const dispatch = useDispatch();

  return (
    <section className="pb-5 lg:pb-20">
      <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/banner-m-c1cd1ddb.png')] h-[43vh] bg-center bg-cover lg:h-[80vh] lg:pt-16">
        <div className=" p-8">
          <motion.p
            className=" text-3xl font-bold text-white leading-10 lg:text-center md:text-5xl lg:font-extrabold lg:mb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            <span className=" text-[#1DCF9F] ">Innovative</span> Payment
            Solutions
          </motion.p>
          <motion.p
            className=" text-3xl font-bold text-white leading-10 lg:text-center md:text-5xl lg:font-extrabold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            for Your Business
          </motion.p>
          <motion.hr
            className=" w-1/2 border-[#1DCF9F] my-5 lg:w-5/6 lg:mx-auto lg:mt-12 lg:mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              stiffness: 200,
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "-20vh" },
            }}
          />
          <motion.p
            className=" text-white text-sm text-justify leading-6 md:text-lg lg:text-center lg:w-5/6 lg:mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "20vh" },
            }}
          >
            By understanding your business models and identifying pain points.
            OPay Business provides customized industrial solutions with
            ready-made products to help you outspace competitors.
          </motion.p>
        </div>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 -mt-12 items-center justify-center px-7 lg:px-24">
        <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/1-a718bc58.png')] bg-cover bg-center h-24 md:h-56"></div>
        <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/2-23851d75.png')] bg-cover bg-center h-24 md:h-56"></div>
        <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/3-e1c24105.png')] bg-cover bg-center h-24 md:h-56"></div>
        <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/4-2a8dc70c.png')] bg-cover bg-center h-24 md:h-56"></div>
        <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/5-02306ae9.png')] hidden lg:inline-grid bg-cover bg-center h-24 lg:h-56"></div>
        <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/6-ca4fd523.png')] hidden lg:inline-grid bg-cover bg-center h-24 lg:h-56"></div>
      </div>
      <div className=" grid gap-10 items-center px-7 my-16 lg:my-32 lg:grid-cols-3 lg:gap-28 lg:px-24">
        <div className=" flex flex-col items-start justify-start gap-5 lg:gap-10">
          <img
            src="https://opaybusiness.opayweb.com/static/png/item-1-3356cea5.png"
            alt=""
            className=" w-12 lg:w-16"
          />
          <motion.p
            className=" text-xl font-bold md:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Digitize value chains
          </motion.p>
          <motion.p
            className=" text-[#575757] md:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Get different payment collection tools and integration services to
            meet your specific business needs
          </motion.p>
        </div>
        <div className=" flex flex-col items-start justify-start gap-5 lg:gap-10">
          <img
            src="https://opaybusiness.opayweb.com/static/png/item-2-e51cd478.png"
            alt=""
            className=" w-12 lg:w-16"
          />
          <motion.p
            className=" text-xl font-bold md:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Authomate payment collection processes
          </motion.p>
          <motion.p
            className=" text-[#575757] md:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Avoid man-made mistakes and enhance efficiency in collection,
            settlement & reconcilation.
          </motion.p>
        </div>
        <div className=" flex flex-col items-start justify-start gap-5 lg:gap-10">
          <img
            src="https://opaybusiness.opayweb.com/static/png/item-3-856935d8.png"
            alt=""
            className=" w-12 lg:w-16"
          />
          <motion.p
            className=" text-xl font-bold md:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Eliminate potential business risks
          </motion.p>
          <motion.p
            className=" text-[#575757] md:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Enhance the security of funds along your business operation journey.
          </motion.p>
        </div>
        <div className=" flex flex-col items-start justify-start gap-5 lg:gap-10">
          <img
            src="https://opaybusiness.opayweb.com/static/png/item-4-adac4421.png"
            alt=""
            className=" w-12 lg:w-16"
          />
          <motion.p
            className=" text-xl font-bold md:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Expand sales channels
          </motion.p>
          <motion.p
            className=" text-[#575757] md:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Create your online website with ease and manage inventory, sales and
            customers anywhere you want.
          </motion.p>
        </div>
        <div className=" flex flex-col items-start justify-start gap-5 lg:gap-10">
          <img
            src="https://opaybusiness.opayweb.com/static/png/item-5-563d4da2.png"
            alt=""
            className=" w-12 lg:w-16"
          />
          <motion.p
            className=" text-xl font-bold md:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Enhance customer loyalty and improve repeat purchase rate
          </motion.p>
          <motion.p
            className=" text-[#575757] md:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Provide expectional customer experiences with loyalty programs and
            reward systems.
          </motion.p>
        </div>
        <div className=" lg:flex flex-col items-start justify-start gap-5 lg:gap-10 hidden self-start">
          <img
            src="https://opaybusiness.opayweb.com/static/png/item-6-375802b2.png"
            alt=""
            className=" w-12 lg:w-16"
          />
          <motion.p
            className=" text-xl font-bold lg:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            ......
          </motion.p>
        </div>
      </div>
      <motion.div
        className=" flex items-center gap-2 justify-center bg-[#1DCF9F] w-4/5 lg:w-[45%] mx-auto rounded-full text-white py-2 mt-5 lg:mt-20"
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
      <motion.p
        className=" text-center my-7 lg:mt-12 lg:mb-24 md:text-xl text-[#575757]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "5vh" },
        }}
      >
        Get in touch with us to learn more
      </motion.p>
    </section>
  );
};

export default Solutions;
