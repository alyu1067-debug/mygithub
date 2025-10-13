import { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import "./App.css";

const products = [
  {
    id: 1,
    name: "브랜드A",
    subtitle: "편안하고 착용감이 좋은 신발",
    price: 25000,
    thumbnail:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTlBJUI0JUVCJThGJTk5JUVEJTk5JTk0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 2,
    name: "브랜드A",
    subtitle: "힙한 컬러가 매력적인 신발",
    price: 35000,
    thumbnail:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "브랜드B",
    subtitle: "편안하고 착용감이 좋은 신발",
    price: 36000,
    thumbnail:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQyU5QSVCNCVFQiU4RiU5OSVFRCU5OSU5NHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 4,
    name: "브랜드B",
    subtitle: "힙한 컬러가 매력적인 신발",
    price: 30000,
    thumbnail:
      "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fCVFQyU5QSVCNCVFQiU4RiU5OSVFRCU5OSU5NHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 5,
    name: "브랜드C",
    subtitle: "편안하고 착용감이 좋은 신발",
    price: 22000,
    thumbnail:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTlBJUI0JUVCJThGJTk5JUVEJTk5JTk0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 6,
    name: "브랜드C",
    subtitle: "힙한 컬러가 매력적인 신발",
    price: 39000,
    thumbnail:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fCVFQyU5QSVCNCVFQiU4RiU5OSVFRCU5OSU5NHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAdd = () => setCartCount((c) => c + 1);

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <a href="/" className="logo" onClick={(e) => e.preventDefault()}>
            MiShop
          </a>
          <div className="spacer" />
          <button className="cart-btn" aria-label="장바구니">
            🛒 <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </header>

      <main className="container">
        <section className="list-head">
          <h1>신발 상품 목록</h1>
          <p>현재 {products.length}개의 상품이 있습니다.</p>
        </section>

        {/* 👉 핵심: map으로 6개 렌더링 */}
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} />
          ))}
        </div>
      </main>
    </div>
  );
}
