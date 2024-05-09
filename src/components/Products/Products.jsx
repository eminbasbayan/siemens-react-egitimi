import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import { data } from "../../data";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(data);
  console.log(products);
  return (
    <div className="products-wrapper">
      <ProductForm products={products} setProducts={setProducts} />
      <div className="products">
        {products
          .map((item) => (
            <ProductCard
              key={item.id}
              img={item.image}
              price={item.price}
              title={item.title}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default Products;
