import React from "react";
import BannerImage from "../assets/opay-banner.png";
import CBNlogo from "../assets/CBNLogo.png";
import NDIClogo from "../assets/NDIClogo.png";
import { openModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <section className=" lg:bg-[#eff1ee] flex flex-col gap-5 lg:flex-row-reverse lg:gap-0 items-center lg:h-screen lg:items-center">
      <div className="bg-[#E6F7EE] lg:bg-inherit lg:w-full lg:h-full lg:relative">
        <img
          src={BannerImage}
          alt="Banner-Image"
          className=" object-cover lg:absolute lg:bottom-0 lg:right-0 lg:max-w-3xl"
        />
      </div>
      <div className=" mx-6 lg:pl-20">
        <h2 className="text-[#210F60] text-3xl font-bold lg:font-extrabold lg:text-6xl">
          Reliable, Fast & Safe Payments
        </h2>
        <p className="text-[#210f60] my-5 lg:my-8 text-lg lg:text-xl">
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
          <button
            className=" px-10 py-2 lg:px-12 lg:py-3 lg:font-extrabold lg:text-2xl lg:rounded-full rounded-3xl bg-[#1DCF9F] text-white text-lg font-bold"
            onClick={() => dispatch(openModal())}
          >
            Contact Us
          </button>
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
      </div>
    </section>
  );
};

export default Hero;
