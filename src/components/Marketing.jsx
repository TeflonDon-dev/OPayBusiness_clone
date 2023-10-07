import React from "react";
import omnicalPayment from "../assets/omnicalPayment.png";
import industrialPayments from "../assets/industrialPayment.png";
import Banker from "../assets/Banker.png";
import onlineSales from "../assets/onlinesales.png";

const Marketing = () => {
  return (
    <section className="lg:w-5/6 w-full items-start justify-center gap-10 mt-16 lg:mt-32 lg:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-y-16">
      <div className=" flex flex-col gap-3 lg:gap-6">
        <div>
          <img
            src={omnicalPayment}
            alt="omnicalPayment"
            className=" object-cover w-full"
          />
        </div>
        <p className=" text-[#210F60] font-bold lg:font-extrabold text-xl pl-6 lg:pl-0 lg:text-3xl">
          Omnichannel Payments
        </p>
        <p className=" text-[#575757] text-sm pl-6 lg:pl-0 lg:text-lg">
          Make payment collection, safer, easier and faster via multiple
          channels
        </p>
      </div>

      <div className=" flex flex-col gap-3 lg:gap-6">
        <div>
          <img
            src={industrialPayments}
            alt="industrialPayments"
            className=" object-cover w-full"
          />
        </div>
        <p className=" text-[#210F60] font-bold lg:font-extrabold text-xl pl-6 lg:text-3xl lg:pl-0">
          Industrial Payments Solutions
        </p>
        <p className=" text-[#575757] text-sm pl-6 lg:pl-0 lg:text-lg">
          Get a customized payment solution for your business
        </p>
      </div>

      <div className=" flex flex-col gap-3 lg:gap-6">
        <div>
          <img src={Banker} alt="Banker" className=" object-cover w-full" />
        </div>
        <p className=" text-[#210F60] font-bold lg:font-extrabold  text-xl pl-6 lg:pl-0 lg:text-3xl">
          Banking & Bill Payments
        </p>
        <p className=" text-[#575757] text-sm pl-6 lg:pl-0 lg:text-lg">
          Enjoy financial inclusion and efficiency with the largest banking
          agent network
        </p>
      </div>

      <div className=" flex flex-col gap-3 lg:gap-6">
        <div>
          <img
            src={onlineSales}
            alt="onlineSales"
            className=" object-cover w-full"
          />
        </div>
        <p className=" text-[#210F60] font-bold lg:font-extrabold  text-xl pl-6 lg:text-3xl lg:pl-0">
          Online Sales & Marketing
        </p>
        <p className=" text-[#575757] text-sm pl-6 lg:text-lg lg:pl-0">
          Expand your sales channels from offline to online
        </p>
      </div>
    </section>
  );
};

export default Marketing;
