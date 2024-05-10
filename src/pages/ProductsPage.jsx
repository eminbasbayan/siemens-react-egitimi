import { useLoaderData } from "react-router-dom";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const data = useLoaderData();

  return (
    <div className="products-page">
      <h1>Ürünler Sayfasına Hoşgeldiniz!</h1>
      <Products products={data} />
    </div>
  );
};

export default ProductsPage;
