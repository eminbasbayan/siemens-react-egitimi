import { useState } from "react";
import PropTypes from "prop-types";

const initialValues = {
  image: "",
  title: "",
  price: "",
};

function ProductForm({ products, setProducts }) {
  const [productInputs, setProductInputs] = useState(initialValues);

  function handleChange(event) {
    setProductInputs({
      ...productInputs,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(productInputs).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      console.error("Tüm alanlar dolu olmalı.");
      return;
    }

    const newProduct = {
      id: Math.random(),
      image: productInputs.image,
      price: Number(productInputs.price),
      title: productInputs.title,
    };
    setProducts([...products, newProduct]);
    setProductInputs(initialValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Product Image</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="image"
          value={productInputs.image}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Product Title</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="title"
          value={productInputs.title}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Product Price</label>
        <input
          type="number"
          className="form-control"
          onChange={handleChange}
          name="price"
          value={productInputs.price}
        />
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
