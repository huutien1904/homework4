import "./App.css";
import Filter from "./Component/Filter/Filter";
import Header from "./Component/Header/Header";
import Modal from "./Component/Modal/Modal";
import GiftItem from "./Component/Product/GiftItem";
function App() {
  const products = [
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%",
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%",
    },
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%",
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%",
    },
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%",
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%",
    },
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%",
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%",
    },
  ];
  return (
    <div>
      <Header />
      <Filter />
      <GiftItem products={products} />
    </div>
  );
}

export default App;
