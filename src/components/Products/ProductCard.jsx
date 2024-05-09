import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductCard.css";
import { useState } from "react";

function ProductCard(props) {
  const { img, title, price, pTitle } = props;
  const [productTitle, setProductTitle] = useState(title);

  function handleChangeTitle() {
    setProductTitle(pTitle);
  }

  return (
    <div className="product-card">
      <img src={img} alt="çanta görseli" />
      <div className="product-info">
        <strong>{productTitle.slice(0, 20)}...</strong>
        <span>{price}₺</span>
        <Button background="success" size="sm" onClick={handleChangeTitle}>
          <strong>Change Title</strong>
        </Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  setTitle: PropTypes.func,
  pTitle: PropTypes.string,
};

export default ProductCard;
