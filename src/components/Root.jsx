import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
