import React from "react";
import Nav from "../../components/Nav/Nav";
import Landing from "./Landing/Landing";
import Categories from "./Categories/Categories";
import Advace from "./Advace/Advace";
import Info from "./Info/Info";
import Subscribe from "./subscribe/subscribe";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Landing />
      <Categories />
      <Advace />
      <Info />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
