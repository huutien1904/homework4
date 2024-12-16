import React, { useState } from "react";
import "./Product.css";

const Product = (props) => {
  const { productDetail } = props;
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    productDetail && (
      <div className="container">
        <div className="product-info">
          <img src={productDetail?.image} alt="Ngũ hạt thập cẩm" className="product-image" />
          <div className="product-details">
            <h2>{productDetail?.title}</h2>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="price">
              Giá: <b>{productDetail?.price}</b> <del>60.000 VND</del> <span>{productDetail?.discount}</span>
            </p>

            {/* Size Selection */}
            <div className="size-selection">
              <h4>Phân Loại</h4>
              <div className="size-buttons">
                <button>Nhỏ</button>
                <button className="active">Vừa</button>
                <button>Lớn</button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
              <button className="choose-btn">Chọn mua</button>
            </div>
          </div>
        </div>
        <p>
          Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà
          vào các dịp lễ, thân thiện với mọi nhà
        </p>
      </div>
    )
  );
};

export default Product;
