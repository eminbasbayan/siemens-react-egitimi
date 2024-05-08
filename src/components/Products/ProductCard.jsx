import PropTypes from "prop-types";
import "./ProductCard.css";

function ProductCard(props) {
  const { img, title, price } = props;

  return (
    <div className="product-card">
      <img src={img} alt="çanta görseli" />
      <div className="product-info">
        <strong>{title.slice(0, 20)}...</strong>
        <span>{price}₺</span>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
