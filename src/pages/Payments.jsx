import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import opaySystem from "../assets/opaysystem.png";
import phoneImg from "../assets/phone-img.png";
import { openModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";

const Payments = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <div className=" bg-[#FAFAFA] pb-12 lg:pb-32">
        <div className=" text-4xl p-10 font-bold lg:text-center lg:border-b lg:w-4/5 lg:mx-auto lg:border-b-black lg:pt-20 md:text-5xl lg:font-extrabold ">
          <p className=" lg:mb-4 text-[#210F60]">
            Upgrade your Business with Opay
          </p>
          <p className=" text-[#210F60]">
            <span className=" text-[#1DCF9F]">Omnichannel </span> Payments
          </p>
        </div>
        <div className=" flex flex-col mt-5 lg:mt-32 lg:flex-row-reverse gap-10 justify-center items-center lg:w-4/5 lg:mx-auto">
          <div className="  basis-1/2 overflow-hidden">
            <img
              src="https://opaybusiness.opayweb.com/static/png/1-826a3d39.png"
              alt="pos-terminal"
              className=" object-cover"
            />
          </div>
          <div className=" basis-1/2 lg:self-start px-10  lg:px-0">
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 md:text-4xl lg:font-extrabold">
              POS Terminals
            </h3>
            <p className=" font-bold mb-3 md:text-xl">
              Get POS terminals that meet your specific needs
            </p>
            <ul className=" list-disc marker:text-green-500 leading-10 md:text-lg md:leading-10">
              <li>Best network uptime & lowest charges</li>
              <li>No delay in recieving payments</li>
              <li>Automated dispute resolution</li>
              <li>Durable hardware & strong battery</li>
              <li>EOD reports for easier reconcilation</li>
              <li>Bill payments & more value-added services</li>
            </ul>
            <button className=" bg-[#1DCF9F] px-6 py-3 rounded-full w-full lg:w-3/6   font-bold text-xl text-white my-5">
              Apply for POS
            </button>
          </div>
        </div>
        <div className=" flex flex-col mt-5 lg:mt-20 lg:flex-row gap-10 justify-center items-center lg:w-4/5 lg:mx-auto lg:gap-24">
          <div className="  basis-1/2 overflow-hidden">
            <img
              src="https://opaybusiness.opayweb.com/static/png/2-ce895c70.png"
              alt="pos-terminal"
              className=" object-cover"
            />
          </div>
          <div className=" basis-1/2 lg:self-center px-10 lg:px-0">
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 md:text-4xl lg:font-extrabold">
              Virtual Account
            </h3>
            <p className=" font-bold mb-3 md:text-xl">
              Receive transfers in a safer & faster way
            </p>
            <ul className=" list-disc marker:text-green-500 leading-10 md:text-lg md:leading-10">
              <li>Receive funds safely with masked accounts</li>
              <li>Instant Voice notifications</li>
              <li>100% transaction success rate</li>
              <li>Instant confirmation by branch employees</li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col mt-5 lg:mt-20 lg:flex-row-reverse gap-10 justify-center items-center lg:w-4/5 lg:mx-auto lg:gap-24">
          <div className="  basis-1/2 overflow-hidden">
            <img
              src="https://opaybusiness.opayweb.com/static/png/3-1582c16d.png"
              alt="pos-terminal"
              className=" object-cover"
            />
          </div>
          <div className=" basis-1/2 lg:self-center px-10 lg:px-0">
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 md:text-4xl lg:font-extrabold">
              Opay Business App
            </h3>
            <p className=" font-bold mb-3 md:text-xl">
              Manage your business at your fingertips
            </p>
            <ul className=" list-disc marker:text-green-500 leading-10 md:text-lg md:leading-10">
              <li>Collect payments via multiple channels</li>
              <li>Check transaction history & details in real-time</li>
              <li>Manage branches, employees & customers</li>
              <li>Get access to online sales & more value-added services</li>
            </ul>
            <div>
              <img
                src="https://opaybusiness.opayweb.com/static/png/gp-22ed0a4a.png"
                alt=""
                className=" w-32 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" my-10 lg:my-20">
        <h2 className=" my-7 lg:my-20 capitalize text-center font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-5xl text-[#210F60]">
          online payments for everyone
        </h2>
        <div className="flex items-center gap-5 px-10 lg:px-24 overflow-x-scroll scrollbar-none ">
          <div className=" min-w-[270px]  lg:basis-1/2  bg-[url('https://opaybusiness.opayweb.com/static/png/1-946e5fb4.png')] lg:h-screen h-[55vh]  bg-center bg-cover">
            <div className="  h-full relative">
              <div className=" absolute bottom-10 text-white pl-5">
                <p className=" font-bold text-xl lg:text-3xl lg:font-extrabold">
                  Full suite of
                </p>
                <p className=" font-bold text-xl mb-6 lg:mb-8  lg:text-3xl lg:font-extrabold">
                  payment options
                </p>
                <p className=" lg:text-lg">
                  Accept payments anytime and everywhere. Payments are made
                  easier with OPay.
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-[270px] lg:basis-1/2 bg-[url('https://opaybusiness.opayweb.com/static/png/2-d704ddc2.png')] lg:h-screen h-[55vh]   bg-center bg-cover">
            <div className=" h-full relative">
              <div className=" absolute bottom-16 text-white pl-5">
                <p className=" font-bold text-xl lg:text-3xl lg:font-extrabold">
                  Fraud
                </p>
                <p className=" font-bold text-xl mb-6 lg:text-3xl lg:font-extrabold">
                  detection
                </p>
                <p className=" lg:text-lg">
                  We enable Level 1 PCI compliance and set custom fraud
                  protections.
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-[270px]  lg:basis-1/2 bg-[url('https://opaybusiness.opayweb.com/static/png/3-e40fec62.png')] lg:h-screen h-[55vh] bg-center bg-cover">
            <div className="h-full relative">
              <div className=" absolute bottom-10 text-white pl-5">
                <p className=" font-bold text-xl lg:text-3xl lg:font-extrabold">
                  24/7
                </p>
                <p className=" font-bold text-xl mb-3 lg:text-3xl lg:font-extrabold">
                  Customer care
                </p>
                <p className=" lg:text-lg">
                  Our team of experts are ready to handle your concerns
                  according to your business models all day long.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-center my-4 lg:my-6 lg:text-xl text-lg p-3">
          Let your customers choose their preferred payment methods and accept
          payments anytime, everywhere.
        </p>
        <h3 className=" lg:text-3xl font-medium text-[#1DCF9F] text-center text-2xl flex items-center justify-center gap-2">
          Apply for OPay Online Gateway
          <LiaGreaterThanSolid className=" text-sm lg:text-lg" />
        </h3>
      </div>
      <div className=" bg-[#FAFAFA] py-5 lg:py-20">
        <div className=" p-4 text-center text-2xl font-medium md:text-3xl lg:text-5xl lg:font-extrabold">
          <h3 className=" lg:mb-4 text-[#210F60]">
            Get A{" "}
            <span className=" text-[#1DCF9F]">Professional Dashboard</span> with
          </h3>
          <h3 className=" text-[#210F60]">
            Visualization & Business Intelligence
          </h3>
        </div>

        <div className=" mt-5 mb-10 lg:p-24">
          <img src={opaySystem} alt="" />
        </div>
        <p className=" text-center p-5 text-xl font-bold lg:text-4xl lg:font-extrabold text-[#210F60] ">
          Digitalize the way you handle your business operations
        </p>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 p-5 lg:px-28 lg:py-14">
          <div className=" bg-white flex flex-col gap-4 items-center justify-center px-2 py-6 rounded-lg">
            <img
              src="https://opaybusiness.opayweb.com/static/png/1-4c67233c.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Real-time performance tracking & regular reports
            </p>
          </div>
          <div className=" bg-white flex flex-col gap-4 items-center px-2 py-6 rounded-lg">
            <img
              src="https://opaybusiness.opayweb.com/static/png/2-6945e29f.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Branch and employee management with ease
            </p>
          </div>
          <div className=" bg-white flex flex-col gap-4 items-center px-2 py-6 rounded-lg">
            <img
              src="https://opaybusiness.opayweb.com/static/png/3-4ce48a56.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Corporate funds management & flexible settlement configuration
            </p>
          </div>
          <div className=" bg-white flex flex-col gap-4 items-center px-2 py-6 rounded-lg">
            <img
              src="https://opaybusiness.opayweb.com/static/png/4-cd9935e5.png"
              alt=""
              className=" w-14 h-14"
            />
            <p className=" text-center text-sm lg:text-lg text-[#575757]">
              Payroll management & more value-added services
            </p>
          </div>
        </div>
        <p className=" text-center text-xl font-medium mt-5 lg:mt-16 text-[#210F60] lg:text-4xl lg:font-extrabold">
          Get insights about your business
        </p>
        <p className=" p-5 text-center lg:py-12 lg:px-32 lg:text-lg text-[#575757]">
          Access a comprehensive data analysis of your business to help you
          discover your business opportunities and customer purchase behaviour.
          Save time, boost sales and earn more money by getting insights on your
          best-selling products and highest-spending customers.
        </p>
        <div className=" flex items-center gap-2 justify-center bg-[#1DCF9F] w-4/5 lg:w-[45%] mx-auto rounded-full text-white py-2 mt-5 lg:mt-20">
          <img src={phoneImg} alt="phone-Img" className=" w-10 lg:w-16" />
          <button
            className=" text-2xl lg:text-3xl font-bold lg:font-extrabold"
            onClick={() => dispatch(openModal())}
          >
            Contact OPay
          </button>
        </div>
        <p className=" text-center my-7 lg:mt-12 lg:mb-24 lg:text-xl text-[#575757]">
          Get in touch with us to learn more
        </p>
      </div>
    </section>
  );
};

export default Payments;
