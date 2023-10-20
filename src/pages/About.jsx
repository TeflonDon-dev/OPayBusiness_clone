import React from "react";

const About = () => {
  return (
    <section className=" bg-[#F8F8F8]">
      <div className=" bg-[url('https://opaybusiness.opayweb.com/static/png/banner-m-e38af5af.png')] bg-[#1DCF9F] bg-cover lg:bg-contain lg:bg-no-repeat bg-center h-[28vh] lg:h-screen">
        <h2 className=" text-3xl font-bold text-center p-10 text-[#210F60] lg:text-6xl lg:font-extrabold lg:pt-28">
          About Us
        </h2>
      </div>
      <div className=" flex items-center flex-col px-8 -mt-32 gap-10  lg:bg-white lg:flex-row-reverse lg:w-[90%] lg:rounded-lg lg:-mt-80 lg:mx-auto lg:h-screen lg:justify-between">
        <div className=" lg:hidden">
          <img
            src="https://opaybusiness.opayweb.com/static/png/opay-m-82ba2d9b.png"
            alt=""
          />
        </div>
        <div className=" lg:inline-flex lg:h-full lg:w-full hidden lg:py-8 lg:basis-2/5">
          <img
            src="https://opaybusiness.opayweb.com/static/png/opay-ffc3015b.png"
            alt=""
            className=" object-cover lg:h-full lg:w-full"
          />
        </div>
        <div className=" text-sm lg:text-justify lg:basis-3/5 text-[#210F60] lg:self-center">
          <p className=" leading-6 lg:text-xl lg:font-medium ">
            OPay Digital Services Limited is a leading payment and financial
            service platform. Our mission is to drive financial inclusion by
            providing efficient and convenient payment services, as we fully
            believe that no one should be denied access to participate in the
            world economy. As of now, we have offered accessible financial
            solutions to over 30 million consumers and 1 million businesses of
            all sizes.
          </p>
          <p className=" my-8 leading-6 lg:text-xl lg:font-medium ">
            We are a global company with footprints in many emerging markets
            across Asia, Africa and latin America. Our journey in Nigeria
            started in 2018 and we are strictly licensed and regulated by the
            Central Bank of Nigeria (CBN) and insured by the Nigeria Deposit
            Insurance Corporation (NDIC). Today in Nigeria, OPay Business has
            built the largest business network with our merchants covering all
            the 36 states.
          </p>
        </div>
      </div>
      <p className=" hidden lg:inline-grid lg:my-20 lg:text-5xl lg:font-extrabold text-[#210F60] lg:items-center lg:justify-center lg:w-full">
        Company Values
      </p>
      <div className=" grid items-center gap-10 mt-5 mb-16 lg:gap-0 bg-white lg:py-20">
        <div className=" flex flex-col lg:flex-row-reverse items-center gap-5 lg:px-16 lg:gap-14">
          <div className=" lg:basis-1/2">
            <img
              src="https://opaybusiness.opayweb.com/static/png/1-0158b3f3.png"
              alt=""
            />
          </div>
          <div className=" px-6 lg:basis-1/2 lg:px-8 ">
            <h2 className=" text-xl font-bold text-[#210F60] mb-2 lg:mb-8 lg:text-5xl lg:font-extrabold">
              Entrepreneurship
            </h2>
            <p className=" text-[#575757] lg:text-xl">
              Create opportunities and solve pain points with collaboration and
              passion for the industry
            </p>
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
            <h2 className=" text-xl font-bold text-[#210F60] mb-2 lg:mb-8 lg:text-5xl lg:font-extrabold">
              Diversity
            </h2>
            <p className=" text-[#575757] lg:text-xl lg:w-2/3">
              Embrace people from diversified backgrounds and acknowledge the
              interdependence as humans
            </p>
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
            <h2 className=" text-xl font-bold text-[#210F60] mb-2 lg:mb-8 lg:text-5xl lg:font-extrabold">
              Innovation
            </h2>
            <p className=" text-[#575757] lg:text-xl lg:w-2/3">
              Ride on advanced technologies to nourish an innovation-drioven
              working environment
            </p>
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
            <h2 className=" text-xl font-bold text-[#210F60] mb-2  lg:mb-8 lg:text-5xl lg:font-extrabold">
              Community
            </h2>
            <p className=" text-[#575757] lg:text-xl lg:w-4/5">
              Enhance our synergy by creating a vibrant community with great
              people and great cultures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
