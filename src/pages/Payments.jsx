import React from "react";

const Payments = () => {
  return (
    <section>
      <div className=" bg-[#FAFAFA] pb-12 lg:pb-32">
        <div className=" text-4xl p-10 font-bold lg:text-center lg:border-b lg:w-4/5 lg:mx-auto lg:border-b-black lg:pt-20 lg:text-5xl lg:font-extrabold ">
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
          <div className=" basis-1/2 lg:self-start px-10 lg:px-0">
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 lg:text-5xl lg:font-extrabold">
              POS Terminals
            </h3>
            <p className=" font-bold mb-3 lg:text-xl">
              Get POS terminals that meet your specific needs
            </p>
            <ul className=" list-disc marker:text-green-500 leading-10 lg:text-lg lg:leading-10">
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
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 lg:text-5xl lg:font-extrabold">
              Virtual Account
            </h3>
            <p className=" font-bold mb-3 lg:text-xl">
              Receive transfers in a safer & faster way
            </p>
            <ul className=" list-disc marker:text-green-500 leading-10 lg:text-lg lg:leading-10">
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
            <h3 className=" text-[#210F60] text-xl font-bold mb-3 lg:text-5xl lg:font-extrabold">
              Opay Business App
            </h3>
            <p className=" font-bold mb-3 lg:text-xl">
              Manage your business at your fingertips
            </p>
            <ul className=" list-disc marker:text-green-500 leading-10 lg:text-lg lg:leading-10">
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
    </section>
  );
};

export default Payments;
