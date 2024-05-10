import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import { data } from "../../data";
import "./Products.css";
import Spinner from "../UI/Spinner";

function Products() {
  const [products, setProducts] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    setProducts([]);
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("İşlem tamamlandı!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter((item) => {
      return item.id !== productId;
    });
    setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      <ProductForm products={products} setProducts={setProducts} />
      <br />
      {isLoading && <Spinner type="danger" />}
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
