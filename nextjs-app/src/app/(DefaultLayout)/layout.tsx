"use client";
import Header from "@/app/_layoutComponents/Header";
import { Fragment, FunctionComponent, ReactNode } from "react";
import Navbar from "../_layoutComponents/Navbar";
import Sidebar from "../_layoutComponents/Sidebar";
import Footer from "../_layoutComponents/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="max-lg:mt-navHeightLg mt-navHeight max-lg:ml-[15px] max-lg:mr-[15px] ml-[280px]">
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
