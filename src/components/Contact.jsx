import React from "react";
import phoneImg from "../assets/phone-img.png";
import { openModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";
const Contact = () => {
  const dispatch = useDispatch();
  return (
    <section className=" mb-10 lg:mb-32">
      <div className=" text-center text-xl text-[#210F60] font-bold mb-7 lg:text-4xl lg:font-extrabold lg:mb-12">
        Join Us & Grow Your Business Faster
      </div>
      <div className=" flex items-center gap-2 justify-center bg-[#1DCF9F] w-4/5 lg:w-[45%] mx-auto rounded-full text-white py-3">
        <img src={phoneImg} alt="phone-Img" className=" w-10 lg:w-16" />
        <button
          className=" text-2xl lg:text-3xl font-bold lg:font-extrabold"
          onClick={() => dispatch(openModal())}
        >
          Contact OPay
        </button>
      </div>
    </section>
  );
};

export default Contact;
