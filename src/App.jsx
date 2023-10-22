import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
const App = () => {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <>
      <Nav />
      {isOpen && <Modal />}
      <main className=" pt-16 min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
