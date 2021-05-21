import React from "react";
import "./NewProducts.scss";
import Title from "../../../common/Title/Title";
import ProductDescription from "../../../common/ProductDescription/ProductDescription";
import PropTypes from "prop-types";

NewProducts.propTypes = {};
const data = [
  {
    id: 1,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210331/31032021090328_1.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 2,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210331/31032021090328_1.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 3,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210331/31032021090328_1.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 4,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210331/31032021090328_1.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 5,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210331/31032021090328_1.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 6,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2917202131755_1_thumb.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 7,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2917202131755_1_thumb.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 8,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2917202131755_1_thumb.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 9,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2917202131755_1_thumb.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 10,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2917202131755_1_thumb.jpg",
    price: 190000,
    description: "Do Suhu sở hữu bản quyền",
  },
];
function NewProducts(props) {
  const { title } = props;
  return (
    <>
      <Title title={title} />
      <div className="new-products flex">
        {data.map((value, index) => {
          return (
            <div className="new-products__item">
              <div className="new-products__image" key={index}>
                <img src={value.src} style={setting} />
              </div>
              <ProductDescription
                title={value.title}
                price={value.price}
                description={value.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
const setting = {
  width: "100%",
  height: "350px",
};

export default NewProducts;
