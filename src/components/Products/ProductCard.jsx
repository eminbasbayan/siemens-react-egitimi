import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductCard.css";

function ProductCard(props) {
  const { img, price, title } = props;

  return (
    <div className="product-card">
      <img src={img} alt="çanta görseli" />
      <div className="product-info">
        <strong>{title.slice(0, 20)}...</strong>
        <span>{price}₺</span>
        <Button background="success" size="sm">
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
