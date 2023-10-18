import React from "react";
import OpayLogo from "../assets/opaylogo3.png";
import opayLogo2 from "../assets/opayLogo2.png";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import location from "../assets/location.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" p-8 bg-[#210F60] flex flex-col lg:flex lg:flex-row items-center justify-around text-white gap-5 lg:gap-10 ">
      <div className=" self-start lg:self-center">
        <Link
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          to={"/"}
        >
          <img
            src={opayLogo2}
            alt="opayLogo2"
            className=" hidden lg:inline-flex w-28"
          />
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          to={"/"}
        >
          <img src={OpayLogo} alt="OpayLogo" className=" lg:hidden w-40 " />
        </Link>
      </div>
      <div className="self-start">
        <div className=" lg:flex items-center justify-between gap-4  border-b pb-3 text-xl mb-5 font-bold  hidden">
          <Link
            to={"/payments"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className=" hover:text-[#1DCF9F] duration-500"
          >
            Payments
          </Link>
          <Link
            to={"/solutions"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="hover:text-[#1DCF9F] duration-500"
          >
            Solutions
          </Link>
          <Link
            to={"/about"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="hover:text-[#1DCF9F] duration-500"
          >
            About OPay
          </Link>
        </div>
        <div className=" flex flex-col  lg:justify-between lg:items-center lg:flex-row gap-5 lg:gap-20">
          <div className=" flex flex-col  gap-2 border-b lg:border-none pb-5 lg:p-0">
            <div className=" flex items-center gap-2">
              <img src={location} alt="location" className=" w-4" />
              <span className=" underline">Lagos</span>
            </div>
            <address className=" text-xs">
              Plot 9, Dr Nurudeen Olowopopo Avenue, Central Business District,
              Alausa 100212,
              <br /> Ikeja, Lagos, Nigeria
            </address>
            <p className=" text-xs">
              Over 24 physical branches across the nation
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <p className=" text-xs">Contact with us</p>
            <p className=" text-xs"> info@opay-business.com</p>
            <div className=" flex items-center gap-4">
              <div className=" border rounded-full border-white p-[5px]">
                <BsInstagram />
              </div>
              <div className=" border rounded-full border-white p-[5px]">
                <BiLogoFacebook />
              </div>
              <div className=" border rounded-full border-white p-[5px]">
                <RiTwitterXFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
