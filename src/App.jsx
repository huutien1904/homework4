import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Component/Filter/Filter";
import Header from "./Component/Header/Header";
import GiftItem from "./Component/Product/GiftItem";
import Form from "./Component/Form";
function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetProductList = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://6749cf82868020296632b49b.mockapi.io/Product");
      setIsLoading(false);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    console.log("run useEffect");
    handleGetProductList();
  }, []);
  // const products = [
  //   {
  //     image: "./public/1.png",
  //     title: "Granola siêu hạt ăn kiêng 15% yến mạch",
  //     price: "133.000 VND",
  //     discount: "-99%",
  //   },
  //   {
  //     image: "./public/2.png",
  //     title: "Hạnh nhân rang muối biển, 240g, hũ",
  //     price: "150.000 VND",
  //     discount: "-99%",
  //   },
  //   {
  //     image: "./public/1.png",
  //     title: "Granola siêu hạt ăn kiêng 15% yến mạch",
  //     price: "133.000 VND",
  //     discount: "-99%",
  //   },
  //   {
  //     image: "./public/2.png",
  //     title: "Hạnh nhân rang muối biển, 240g, hũ",
  //     price: "150.000 VND",
  //     discount: "-99%",
  //   },
  //   {
  //     image: "./public/1.png",
  //     title: "Granola siêu hạt ăn kiêng 15% yến mạch",
  //     price: "133.000 VND",
  //     discount: "-99%",
  //   },
  //   {
  //     image: "./public/2.png",
  //     title: "Hạnh nhân rang muối biển, 240g, hũ",
  //     price: "150.000 VND",
  //     discount: "-99%",
  //   },
  //   {
  //     image: "./public/1.png",
  //     title: "Granola siêu hạt ăn kiêng 15% yến mạch",
  //     price: "133.000 VND",
  //     discount: "-99%",
  //   },
  //   {
  //     image: "./public/2.png",
  //     title: "Hạnh nhân rang muối biển, 240g, hũ",
  //     price: "150.000 VND",
  //     discount: "-99%",
  //   },
  // ];
  return (
    <div>
      <Header />
      <Filter />
      <GiftItem products={products} isLoading={isLoading} />
      <Form handleGetProductList={handleGetProductList} />
    </div>
  );
}

export default App;
