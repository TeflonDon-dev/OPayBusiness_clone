import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" bg-[#F8F8F8]">
      <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/banner-m-e38af5af.png')] bg-[#1DCF9F] bg-cover lg:bg-contain lg:bg-no-repeat bg-center h-[32vh] lg:h-screen">
        <motion.h2
          className=" text-3xl font-bold text-center p-10 text-[#210F60] md:text-6xl lg:font-extrabold lg:pt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "5vh" },
          }}
        >
          About Us
        </motion.h2>
      </div>
      <div className=" flex items-center flex-col px-8 -mt-28 gap-10  lg:bg-white lg:flex-row-reverse lg:w-[90%] lg:rounded-lg lg:-mt-80 lg:mx-auto lg:h-screen lg:justify-between">
        <div className=" lg:hidden">
          <motion.img
            src="https://opaybusiness.opayweb.com/static/png/opay-m-82ba2d9b.png"
            alt=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { type: "spring", duration: 1, ease: "easeIn" },
              },
              hidden: {
                opacity: 0.2,
                y: -15,
                filter: "blur(5px)",
                transition: { ease: "easeIn", duration: 1 },
              },
            }}
          />
        </div>
        <div className=" lg:inline-flex lg:h-full lg:w-full hidden lg:py-8 lg:basis-2/5">
          <motion.img
            src="https://opaybusiness.opayweb.com/static/png/opay-ffc3015b.png"
            alt=""
            className=" object-cover lg:h-full lg:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { type: "spring", duration: 1, ease: "easeIn" },
              },
              hidden: {
                opacity: 0.2,
                y: -15,
                filter: "blur(5px)",
                transition: { ease: "easeIn", duration: 1 },
              },
            }}
          />
        </div>
        <div className=" text-sm lg:text-justify lg:basis-3/5 text-[#210F60] lg:self-center">
          <motion.p
            className=" leading-6 md:text-xl lg:font-medium "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            OPay Digital Services Limited is a leading payment and financial
            service platform. Our mission is to drive financial inclusion by
            providing efficient and convenient payment services, as we fully
            believe that no one should be denied access to participate in the
            world economy. As of now, we have offered accessible financial
            solutions to over 30 million consumers and 1 million businesses of
            all sizes.
          </motion.p>
          <motion.p
            className=" my-8 leading-6 md:text-xl lg:font-medium "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            We are a global company with footprints in many emerging markets
            across Asia, Africa and latin America. Our journey in Nigeria
            started in 2018 and we are strictly licensed and regulated by the
            Central Bank of Nigeria (CBN) and insured by the Nigeria Deposit
            Insurance Corporation (NDIC). Today in Nigeria, OPay Business has
            built the largest business network with our merchants covering all
            the 36 states.
          </motion.p>
        </div>
      </div>
      <motion.p
        className=" hidden lg:inline-grid lg:my-20 lg:text-5xl lg:font-extrabold text-[#210F60] lg:items-center lg:justify-center lg:w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "5vh" },
        }}
      >
        Company Values
      </motion.p>
      <div className=" grid items-center gap-10 mt-5 mb-16 lg:gap-0 bg-white lg:py-20">
        <div className=" flex flex-col lg:flex-row-reverse items-center gap-5 lg:px-16 lg:gap-14">
          <div className=" lg:basis-1/2">
            <img
              src="https://opaybusiness.opayweb.com/static/png/1-0158b3f3.png"
              alt=""
            />
          </div>
          <div className=" px-6 lg:basis-1/2 lg:px-8 ">
            <motion.h2
              className=" text-xl font-bold text-[#210F60] mb-2 md:mb-8 md:text-5xl lg:font-extrabold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Entrepreneurship
            </motion.h2>
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
              Create opportunities and solve pain points with collaboration and
              passion for the industry
            </motion.p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row items-center gap-5 lg:px-16 lg:gap-14">
          <div className=" lg:basis-1/2 lg:pl-8 ">
            <img
              src="https://opaybusiness.opayweb.com/static/png/2-7472b5c6.png"
              alt=""
            />
          </div>
          <div className=" px-6 lg:basis-1/2 lg:px-8">
            <motion.h2
              className=" text-xl font-bold text-[#210F60] mb-2 md:mb-8 md:text-5xl lg:font-extrabold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Diversity
            </motion.h2>
            <motion.p
              className=" text-[#575757] md:text-xl lg:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Embrace people from diversified backgrounds and acknowledge the
              interdependence as humans
            </motion.p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row-reverse items-center gap-5 lg:px-16 lg:gap-14">
          <div className="lg:basis-1/2 lg:pl-8 ">
            <img
              src="https://opaybusiness.opayweb.com/static/png/3-e5286575.png"
              alt=""
            />
          </div>
          <div className=" px-6 lg:basis-1/2  lg:pl-8 ">
            <motion.h2
              className=" text-xl font-bold text-[#210F60] mb-2 md:mb-8 md:text-5xl lg:font-extrabold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Innovation
            </motion.h2>
            <motion.p
              className=" text-[#575757] md:text-xl lg:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Ride on advanced technologies to nourish an innovation-drioven
              working environment
            </motion.p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row items-center gap-5 lg:px-16 lg:gap-14">
          <div className="lg:basis-1/2 lg:pl-8 ">
            <img
              src="https://opaybusiness.opayweb.com/static/png/4-883cfefd.png"
              alt=""
            />
          </div>
          <div className=" px-6 lg:basis-1/2  lg:pl-8">
            <motion.h2
              className=" text-xl font-bold text-[#210F60] mb-2  md:mb-8 md:text-5xl lg:font-extrabold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Community
            </motion.h2>
            <motion.p
              className=" text-[#575757] md:text-xl lg:w-4/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Enhance our synergy by creating a vibrant community with great
              people and great cultures
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
