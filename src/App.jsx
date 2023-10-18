import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <main className=" pt-16 min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
