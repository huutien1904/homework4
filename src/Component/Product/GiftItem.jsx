/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./GiftItem.css";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "../Modal/Modal";

const ProductCard = (props) => {
  const { product } = props;
  const { discount, image, price, title } = product;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState();
  const clickProduct = (product) => {
    setIsOpenModal(true);
    setProductDetail(product);
  };

  return (
    <>
      <div className="product-card" onClick={() => clickProduct(product)}>
        <img src={image} alt={title} />
        <div className="title-cart">
          <h2>{title}</h2>
          <FaShoppingCart />
        </div>
        <div className="price-discount">
          <p className="price">{price}</p>
          <p className="discount">{discount}</p>
        </div>
      </div>
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} productDetail={productDetail} />
    </>
  );
};

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

const GiftItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { products } = props;
  const handleProductClick = (product) => {
    alert(`Tên sản phẩm: ${product.title}\nGiá: ${product.price}`);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Quà tặng</h1>
        <button className="create-button">Tạo</button>
      </div>
      <ProductGrid products={products} onProductClick={handleProductClick} />
      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
      </div>
    </div>
  );
};

export default GiftItem;
