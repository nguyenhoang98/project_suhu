import React from "react";
import "./Search.scss";
import searchImg from "../../assets/search.png";

function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        className="input-search"
        placeholder="Tìm kiếm sản phẩm"
        alt="search"
      />
      <img src={searchImg} className="search-img" />
    </div>
  );
}

export default Search;
