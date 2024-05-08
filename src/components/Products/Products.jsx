import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
  const fullName = "Emin Başbayan";

  return (
    <div className="products">
      <ProductCard myName={fullName} />
    </div>
  );
}

export default Products;
