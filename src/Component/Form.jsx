import React, { useState } from "react";

export default function Form(props) {
  // eslint-disable-next-line react/prop-types
  const { handleGetProductList } = props;
  const [valueImage, setValueImage] = useState("");
  const [valueTitle, setvalueTitle] = useState("");
  const [valuePrice, setvaluePrice] = useState("");
  const [valueSale, setvalueSale] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyProduct = {
      image: valueImage,
      title: valueTitle,
      price: valuePrice,
      discount: valueSale,
    };
    try {
      const response = await fetch("https://6749cf82868020296632b49b.mockapi.io/Product", {
        method: "POST",
        body: JSON.stringify(bodyProduct),
      }).then((data) => {
        console.log(data);
        handleGetProductList();
      });
      const data2 = await response.json();
      handleGetProductList();
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <form>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="">Ảnh sản phẩm</label>{" "}
        <input type="text" value={valueImage} onChange={(e) => setValueImage(e.target.value)} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="">Tên Sản phẩm</label>{" "}
        <input type="text" value={valueTitle} onChange={(e) => setvalueTitle(e.target.value)} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="">Giá sản phẩm </label>{" "}
        <input type="text" value={valuePrice} onChange={(e) => setvaluePrice(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Giảm giá</label>{" "}
        <input type="text" value={valueSale} onChange={(e) => setvalueSale(e.target.value)} />
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Thêm sản phẩm{" "}
      </button>
    </form>
  );
}
