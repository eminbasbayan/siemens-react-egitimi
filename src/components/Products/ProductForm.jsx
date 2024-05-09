import { useState } from "react";
import PropTypes from "prop-types";

function ProductForm({ products, setProducts }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      id: products[products.length - 1].id + 1,
      image: image,
      title: title,
      price: Number(price),
    };
    setProducts([newProduct, ...products]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Product Image</label>
        <input
          type="text"
          className="form-control"
          onChange={handleImageChange}
        />
        {image}
      </div>
      <div className="mb-3">
        <label className="form-label">Product Title</label>
        <input
          type="text"
          className="form-control"
          onChange={handleTitleChange}
        />
        {title}
      </div>
      <div className="mb-3">
        <label className="form-label">Product Price</label>
        <input
          type="number"
          className="form-control"
          onChange={handlePriceChange}
        />
        {price}
      </div>
      <button type="submit" className="btn btn-primary">
        Yeni Ürün Ekle
      </button>
    </form>
  );
}

ProductForm.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default ProductForm;
