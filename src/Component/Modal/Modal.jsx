/* eslint-disable react/prop-types */
import { useState } from "react";
import Product from "../Product/Product";
import CommentSection from "../CommentSection/CommentSection";
import "./Modal.css";
function Modal(props) {
  const { isOpenModal, setIsOpenModal, productDetail } = props;

  const openModal = () => {};
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="modal-overlay" onClick={closeModal} style={{ display: isOpenModal ? "flex" : "none" }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <Product productDetail={productDetail} />
        <CommentSection />
      </div>
    </div>
  );
}

export default Modal;
