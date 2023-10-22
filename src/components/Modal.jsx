import React from "react";
import { closeModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className=" flex flex-col justify-end fixed bg-gray-900 bg-opacity-60 top-0 z-50 left-0 h-screen w-full">
      <div className=" relative p-2 flex flex-col justify-start items-center h-[28vh] bg-white rounded-t-xl ">
        <IoMdClose
          className=" absolute right-5 text-2xl top-6"
          onClick={() => dispatch(closeModal())}
        />
        <h3 className=" text-xl font-medium p-3 border-b w-full text-center">
          Contact Opay
        </h3>
      </div>
    </aside>
  );
};

export default Modal;
