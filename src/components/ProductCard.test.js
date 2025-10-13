import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

// 테스트용 비동기 함수 (예시)
function getProductData(fn) {
  setTimeout(() => fn("브랜드A"), 100); // 0.1초 후 콜백 실행
}

test("ProductCard 렌더링 후 비동기 콜백 테스트 (일부러 실패 예시)", (done) => {
  // 테스트용 상품 데이터
  const mockProduct = {
    id: 1,
    name: "브랜드A",
    subtitle: "편안한 착용감의 신발",
    price: 25000,
    thumbnail: "https://picsum.photos/200/200",
  };

  // ProductCard 렌더링
  render(<ProductCard product={mockProduct} />);

  // 화면에 상품명이 보이는지 확인
  expect(screen.getByText(/브랜드A/)).toBeInTheDocument();

  // 비동기 콜백 테스트 (일부러 실패 시도)
  function callback(data) {
    try {
      expect(data).toBe("jest test"); // ❌ "브랜드A"와 다르므로 실패
      done(); // 통과 시
    } catch (error) {
      done(error); // 실패 시 Jest에 실패 보고
    }
  }

  // 콜백 실행
  getProductData(callback);
});
