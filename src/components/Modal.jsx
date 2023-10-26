import React from "react";
import { closeModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className=" flex flex-col justify-end lg:justify-center lg:items-center fixed bg-gray-900 bg-opacity-60 top-0 z-50 left-0 h-screen w-full">
      <AnimatePresence>
        <motion.div
          className=" relative p-2 flex flex-col justify-start items-center h-[28vh] bg-white rounded-t-xl lg:rounded-lg lg:h-[55vh] lg:w-[55%] lg:mx-auto"
          exit={{
            y: -20,
            opacity: 0,
            filter: "blur(5px)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 0.7 },
          }}
        >
          <IoMdClose
            className=" absolute right-5 text-2xl top-6 cursor-pointer"
            onClick={() => dispatch(closeModal())}
          />
          <h3 className=" text-xl font-medium p-3 border-b w-full text-center lg:text-start">
            Contact Opay
          </h3>
          <div className=" flex items-center  w-full gap-4 p-6 lg:p-4 border-b lg:border-none lg:w-[70%] lg:mx-auto lg:mt-5 lg:bg-[#F9F8F8]">
            <div>
              <img
                src="https://opaybusiness.opayweb.com/static/png/icon-tel-9f2e593a.png"
                alt=""
                className=" w-7"
              />
            </div>
            <p className="flex-1 font-medium text-lg ">0700888329</p>
            <div>
              <button className=" text-white bg-[#1DCF9F] px-5 py-1  rounded-full text-lg">
                <a href="tel:0700888329">call</a>
              </button>
            </div>
          </div>
          <div className=" border-b flex justify-center gap-4 p-6 lg:p-4 lg:bg-[#F9F8F8] w-full lg:border-none lg:w-[70%] lg:mx-auto lg:m-5">
            <img
              src="https://opaybusiness.opayweb.com/static/png/icon-email-1d6d2744.png"
              alt=""
              className=" w-7"
            />
            <p className=" text-lg font-medium flex-1">
              pos-service@opay-inc.com
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </aside>
  );
};

export default Modal;
