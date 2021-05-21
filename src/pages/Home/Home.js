import React from "react";
import Slider from "../../common/Slider/Slider";
import NewProducts from "../../components/Home/NewProducts/NewProducts";
import Banner from "../../components/Home/Banner/Banner";
import HotProducts from "../../components/Home/HotProducts/HotProducts";
import PropTypes from "prop-types";

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <Slider />
      <NewProducts title="Sản phẩm mới" />
      <Banner />
      <HotProducts title="Sản phẩm hot" />
    </>
  );
}

export default Home;
