import React from "react";
import "../style.css";

export default function Header() {
  return (
    <div className="favorite-section">
      <h1 className="section-title">Yêu thích ngay</h1>
      <br />
      <div className="favorite-content">
        <img src="./public/img1.png" alt="" className="favorite-image" />
        <p className="favorite-description">
          Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có ưu đãi
        </p>
      </div>
    </div>
  );
}
