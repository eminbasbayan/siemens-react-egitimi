import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import { data } from "../../data";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(data);

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter((item) => {
      return item.id !== productId;
    });
    setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      <ProductForm products={products} setProducts={setProducts} />
      <div className="products">
        {products
          .map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.image}
              price={item.price}
              title={item.title}
              category={item.category}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default Products;
