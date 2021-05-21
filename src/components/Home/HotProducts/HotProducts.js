import React from "react";
import "./HotProducts.scss";
import Title from "../../../common/Title/Title";
import ProductDescription from "../../../common/ProductDescription/ProductDescription";
import PropTypes from "prop-types";
HotProducts.propTypes = {};

const data = [
  {
    id: 1,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 2,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 3,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 4,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 5,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 6,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 7,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 8,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 9,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 10,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 11,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 12,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 13,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 14,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 15,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
  {
    id: 16,
    title: "Thời trang",
    src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg",
    price: 299000,
    description: "Do Suhu sở hữu bản quyền",
  },
];
function HotProducts(props) {
  const { title } = props;
  return (
    <>
      <Title title={title} />
      <div className="hot-products flex">
        {data.map((value, index) => {
          return (
            <div className="hot-products__item" key={index}>
              <div className="hot-products__image">
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
  height: "200px",
};
export default HotProducts;
