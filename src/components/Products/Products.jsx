import { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import "./Products.css";

function Products(props) {
  const [products, setProducts] = useState(props.products);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchProducts = async () => {
  //   setIsLoading(true);
  //   setProducts([]);
  //   try {
  //     const res = await fetch("https://fakestoreapi.com/products/");
  //     const data = await res.json();
  //     setProducts(data);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     console.log("İşlem tamamlandı!");
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

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
      {/* {isLoading && <Spinner type="danger" />} */}
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
              description={item.description}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
