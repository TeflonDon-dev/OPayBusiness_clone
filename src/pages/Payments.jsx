import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import opaySystem from "../assets/opaysystem.png";
import phoneImg from "../assets/phone-img.png";
import { openModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const posVariants = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 45 },
  },
};

const virtualVariants = {
  hidden: {
    x: "-20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 45 },
  },
};

const opayVariants = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 45 },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};
const Payments = () => {
  const dispatch = useDispatch();
  return (
    <section className=" overflow-hidden">
      <div className=" bg-[#FAFAFA] pb-12 lg:pb-32">
        <div className=" text-4xl p-10 font-bold lg:text-center lg:border-b lg:w-4/5 lg:mx-auto lg:border-b-black lg:pt-20 md:text-5xl lg:font-extrabold ">
          <motion.p
            className=" lg:mb-4 text-[#210F60]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Upgrade your Business with Opay
          </motion.p>
          <motion.p
            className=" text-[#210F60]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            <span className=" text-[#1DCF9F]">Omnichannel </span> Payments
          </motion.p>
        </div>
        <div className=" flex flex-col mt-5 lg:mt-32 lg:flex-row-reverse gap-10 justify-center items-center lg:w-4/5 lg:mx-auto">
          <motion.div
            className="  basis-1/2 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={posVariants}
          >
            <img
              src="https://opaybusiness.opayweb.com/static/png/1-826a3d39.png"
              alt="pos-terminal"
              className=" object-cover"
            />
          </motion.div>
          <div className=" basis-1/2 lg:self-start px-10  lg:px-0">
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 md:text-4xl lg:font-extrabold">
              POS Terminals
            </h3>
            <p className=" font-bold mb-3 md:text-xl">
              Get POS terminals that meet your specific needs
            </p>
            <motion.ul
              className=" list-disc marker:text-green-500 leading-10 md:text-lg md:leading-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={item}>
                Best network uptime & lowest charges
              </motion.li>
              <motion.li variants={item}>
                No delay in recieving payments
              </motion.li>
              <motion.li variants={item}>
                Automated dispute resolution
              </motion.li>
              <motion.li variants={item}>
                Durable hardware & strong battery
              </motion.li>
              <motion.li variants={item}>
                EOD reports for easier reconcilation
              </motion.li>
              <motion.li variants={item}>
                Bill payments & more value-added services
              </motion.li>
            </motion.ul>
            <motion.button
              className=" bg-[#1DCF9F] px-6 py-3 rounded-full w-full lg:w-3/6   font-bold text-xl text-white my-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "5vh" },
              }}
            >
              Apply for POS
            </motion.button>
          </div>
        </div>
        <div className=" flex flex-col mt-5 lg:mt-20 lg:flex-row gap-10 justify-center items-center lg:w-4/5 lg:mx-auto lg:gap-24">
          <motion.div
            className="  basis-1/2 overflow-hidden"
            variants={virtualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://opaybusiness.opayweb.com/static/png/2-ce895c70.png"
              alt="pos-terminal"
              className=" object-cover"
            />
          </motion.div>
          <div className=" basis-1/2 lg:self-center px-10 lg:px-0">
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 md:text-4xl lg:font-extrabold">
              Virtual Account
            </h3>
            <p className=" font-bold mb-3 md:text-xl">
              Receive transfers in a safer & faster way
            </p>
            <motion.ul
              className=" list-disc marker:text-green-500 leading-10 md:text-lg md:leading-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={item}>
                Receive funds safely with masked accounts
              </motion.li>
              <motion.li variants={item}>Instant Voice notifications</motion.li>
              <motion.li variants={item}>
                100% transaction success rate
              </motion.li>
              <motion.li variants={item}>
                Instant confirmation by branch employees
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className=" flex flex-col mt-5 lg:mt-20 lg:flex-row-reverse gap-10 justify-center items-center lg:w-4/5 lg:mx-auto lg:gap-24">
          <motion.div
            className="  basis-1/2 overflow-hidden"
            variants={opayVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://opaybusiness.opayweb.com/static/png/3-1582c16d.png"
              alt="pos-terminal"
              className=" object-cover"
            />
          </motion.div>
          <div className=" basis-1/2 lg:self-center px-10 lg:px-0">
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 md:text-4xl lg:font-extrabold">
              Opay Business App
            </h3>
            <p className=" font-bold mb-3 md:text-xl">
              Manage your business at your fingertips
            </p>
            <motion.ul
              className=" list-disc marker:text-green-500 leading-10 md:text-lg md:leading-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={item}>
                Collect payments via multiple channels
              </motion.li>
              <motion.li variants={item}>
                Check transaction history & details in real-time
              </motion.li>
              <motion.li variants={item}>
                Manage branches, employees & customers
              </motion.li>
              <motion.li variants={item}>
                Get access to online sales & more value-added services
              </motion.li>
            </motion.ul>
            <div>
              <motion.img
                src="https://opaybusiness.opayweb.com/static/png/gp-22ed0a4a.png"
                alt=""
                className=" w-32 mt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: "5vh" },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" my-10 lg:my-20">
        <motion.h2
          className=" my-7 lg:my-20 capitalize text-center font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-5xl text-[#210F60]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "5vh" },
          }}
        >
          online payments for everyone
        </motion.h2>
        <div className="flex items-center gap-5 px-10 lg:px-24 overflow-x-scroll scrollbar-none ">
          <div className=" min-w-[255px]  lg:basis-1/2  bg-[url('https://opaybusiness.opayweb.com/static/png/1-946e5fb4.png')] lg:h-screen h-[65vh]  bg-center bg-cover">
            <div className="  h-full relative">
              <div className=" absolute bottom-10 text-white pl-5">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "5vh" },
                  }}
                >
                  <p className=" font-bold text-xl lg:text-3xl lg:font-extrabold">
                    Full suite of
                  </p>
                  <p className=" font-bold text-xl mb-6 lg:mb-8  lg:text-3xl lg:font-extrabold">
                    payment options
                  </p>
                </motion.div>
                <motion.p
                  className=" lg:text-lg px-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "5vh" },
                  }}
                >
                  Accept payments anytime and everywhere. Payments are made
                  easier with OPay.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="min-w-[255px] lg:basis-1/2 bg-[url('https://opaybusiness.opayweb.com/static/png/2-d704ddc2.png')] lg:h-screen h-[65vh]   bg-center bg-cover">
            <div className=" h-full relative">
              <div className=" absolute bottom-16 text-white pl-5">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "5vh" },
                  }}
                >
                  <p className=" font-bold text-xl lg:text-3xl lg:font-extrabold">
                    Fraud
                  </p>
                  <p className=" font-bold text-xl mb-6 lg:text-3xl lg:font-extrabold">
                    detection
                  </p>
                </motion.div>
                <motion.p
                  className=" lg:text-lg px-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "5vh" },
                  }}
                >
                  We enable Level 1 PCI compliance and set custom fraud
                  protections.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="min-w-[255px]  lg:basis-1/2 bg-[url('https://opaybusiness.opayweb.com/static/png/3-e40fec62.png')] lg:h-screen h-[65vh] bg-center bg-cover">
            <div className="h-full relative">
              <div className=" absolute bottom-10 text-white pl-5">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "5vh" },
                  }}
                >
                  <p className=" font-bold text-xl lg:text-3xl lg:font-extrabold">
                    24/7
                  </p>
                  <p className=" font-bold text-xl mb-3 lg:text-3xl lg:font-extrabold">
                    Customer care
                  </p>
                </motion.div>
                <motion.p
                  className=" lg:text-lg px-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "5vh" },
                  }}
                >
                  Our team of experts are ready to handle your concerns
                  according to your business models all day long.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <motion.p
          className=" text-center my-4 lg:my-6 lg:text-xl text-lg p-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "5vh" },
          }}
        >
          Let your customers choose their preferred payment methods and accept
          payments anytime, everywhere.
        </motion.p>
        <motion.h3
          className=" lg:text-3xl font-medium text-[#1DCF9F] text-center text-xl px-2 flex items-center justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "5vh" },
          }}
        >
          Apply for OPay Online Gateway
          <LiaGreaterThanSolid className=" text-sm lg:text-lg" />
        </motion.h3>
      </div>
      <div className=" bg-[#FAFAFA] py-5 lg:py-20">
        <div className=" p-4 text-center text-xl font-bold md:text-3xl lg:text-5xl lg:font-extrabold">
          <motion.h3
            className=" lg:mb-4 text-[#210F60]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Get A{" "}
            <span className=" text-[#1DCF9F]">Professional Dashboard</span> with
          </motion.h3>
          <motion.h3
            className=" text-[#210F60]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "5vh" },
            }}
          >
            Visualization & Business Intelligence
          </motion.h3>
        </div>

        <div className=" mt-5 mb-10 lg:p-24">
          <img src={opaySystem} alt="" />
        </div>
        <motion.p
          className=" text-center p-5 text-xl font-bold lg:text-4xl lg:font-extrabold text-[#210F60] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "5vh" },
          }}
        >
          Digitalize the way you handle your business operations
        </motion.p>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 p-5 lg:px-28 lg:py-14">
          <motion.div
            className=" bg-white flex flex-col gap-4 items-center justify-center px-2 py-6 rounded-lg"
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
              src="https://opaybusiness.opayweb.com/static/png/1-4c67233c.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Real-time performance tracking & regular reports
            </p>
          </motion.div>
          <motion.div
            className=" bg-white flex flex-col gap-4 items-center px-2 py-6 rounded-lg"
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
              src="https://opaybusiness.opayweb.com/static/png/2-6945e29f.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Branch and employee management with ease
            </p>
          </motion.div>
          <motion.div
            className=" bg-white flex flex-col gap-4 items-center px-2 py-6 rounded-lg"
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
              src="https://opaybusiness.opayweb.com/static/png/3-4ce48a56.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Corporate funds management & flexible settlement configuration
            </p>
          </motion.div>
          <motion.div
            className=" bg-white flex flex-col gap-4 items-center px-2 py-6 rounded-lg"
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
              src="https://opaybusiness.opayweb.com/static/png/4-cd9935e5.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Payroll management & more value-added services
            </p>
          </motion.div>
        </div>
        <motion.p
          className=" text-center text-xl font-medium mt-5 lg:mt-16 text-[#210F60] lg:text-4xl lg:font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "5vh" },
          }}
        >
          Get insights about your business
        </motion.p>
        <motion.p
          className=" p-5 text-center lg:py-12 lg:px-32 lg:text-lg text-[#575757]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "20vh" },
          }}
        >
          Access a comprehensive data analysis of your business to help you
          discover your business opportunities and customer purchase behaviour.
          Save time, boost sales and earn more money by getting insights on your
          best-selling products and highest-spending customers.
        </motion.p>
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
          className=" text-center my-7 lg:mt-12 lg:mb-24 lg:text-xl text-[#575757]"
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
      </div>
    </section>
  );
};

export default Payments;
