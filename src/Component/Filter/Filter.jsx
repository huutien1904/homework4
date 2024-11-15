import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "../style.css";
export default function Filter() {
  return (
    <div>
      <div className="favorite-section">
        <h1 className="section-title">Mục yêu thích của bạn</h1>
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
        </div>

        <div className="filter-options">
          <select className="filter-option">
            <option>Trạng thái</option>
            <option>Đang bán</option>
            <option>Hết hàng</option>
            <option>Ngưng bán</option>
          </select>

          <select className="filter-option">
            <option>Danh mục</option>
            <option>Rượu</option>
            <option>Hạt</option>
            <option>Hoa quả</option>
          </select>

          <select className="filter-option">
            <option>Đã thêm gần đây</option>
            <option>Mới nhất</option>
            <option>Cũ nhất</option>
          </select>

          <FontAwesomeIcon icon={faList} />
        </div>
      </div>
    </div>
  );
}
