import { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import "./Products.css";

function Products(props) {
  const [products, setProducts] = useState(props.products);
  const [cart, setCart] = useState([]);

  function addToCart(cartItem) {
    setCart([...cart, cartItem]);
  }

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
      <div className="products">
        {products
          .map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              addToCart={addToCart}
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
