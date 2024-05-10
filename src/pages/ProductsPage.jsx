import Header from "../components/Layout/Header";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Header />
      <h1>Ürünler Sayfasına Hoşgeldiniz!</h1>
      <Products />
    </div>
  );
};

export default ProductsPage;
