import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import OpayLogo from "../assets/opay-log.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Payments", link: "/payments" },
    { name: "Solutions", link: "/solutions" },
    { name: "About Us", link: "/about" },
  ];

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };

  const [open, setOpen] = useState(false);
  return (
    <nav
      className={
        scroll
          ? "  w-full fixed top-0 left-0  z-50 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
          : "w-full fixed top-0 left-0 z-50 bg-white"
      }
    >
      <div className=" lg:flex lg:justify-between p-3 lg:items-center lg:w-10/12 lg:mx-auto">
        <div className="cursor-pointer">
          <Link
            to={"/"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={OpayLogo} alt="opay-logo" className=" w-44 md:w-56" />
          </Link>
        </div>

        <div className="  text-3xl absolute right-4 top-4 cursor-pointer lg:hidden">
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineClose className=" border-2 rounded-full border-black p-[2px]" />
            ) : (
              <AiOutlineMenu />
            )}
          </div>
        </div>
        <ul
          onClick={() => setOpen(false)}
          className={` px-5 lg:flex transition-all ease-in duration-300 lg:items-center lg:pb-0 pb-12 lg:w-auto lg:pl-0 md:z-auto z-[-1] left-0 w-full  absolute lg:static ${
            open
              ? "top-4 text-white opacity-100 bg-[#1DCF9F] h-[45vh] flex flex-col justify-between  mt-10 items-start"
              : " top-[-490px] opacity-0 "
          } md:opacity-100 `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className=" flex items-center justify-between lg:ml-8 text-xl lg:py-0 py-5  w-full lg:w-auto border-b  lg:border-none"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Link
                to={link.link}
                className={` hover:text-[#1DCF9F] duration-500 w-full ${
                  pathMatchRoute(link.link) &&
                  "lg:underline lg:underline-offset-8 lg:decoration-[#1DCF9F] font-bold"
                }`}
              >
                {link.name}
              </Link>
              <MdOutlineArrowForwardIos className=" lg:hidden " />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
