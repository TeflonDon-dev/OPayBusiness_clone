import React from "react";
import quaote from "../assets/quote-symbol.png";

const Testimonials = () => {
  return (
    <section className=" my-20 p-5 lg:p-28 flex items-center flex-col lg:flex-row gap-5 ">
      <div className=" bg-[#F8F8FA] relative p-5 ">
        <img
          src={quaote}
          alt="quaote-symbol"
          className=" absolute top-3 right-3 w-14"
        />
        <h3 className=" text-2xl my-5 font-medium">Joshua</h3>
        <p className=" text-sm">
          Kudos to Opay. I've been using Opay for two years now and I must say
          their transfer services are seamless and swift.
        </p>
      </div>
      <div className=" bg-[#F8F8FA] relative p-5 w-full">
        <img
          src={quaote}
          alt="quaote-symbol"
          className=" absolute top-3 right-3 w-14"
        />
        <h3 className=" text-2xl my-5 font-medium">Ifeanyi</h3>
        <p className=" text-sm">
          I'm giving Opay five stars because of its seamless services! The best
          experience so far.
        </p>
      </div>
      <div className=" bg-[#F8F8FA] relative p-5">
        <img
          src={quaote}
          alt="quaote-symbol"
          className=" absolute top-3 right-3 w-14"
        />
        <h3 className=" text-2xl my-5 font-medium">Ibrahim</h3>
        <p className=" text-sm">
          Opay helps make my daily business easier with its POS machines. The
          collection is fast and it drops to my account instantly.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
