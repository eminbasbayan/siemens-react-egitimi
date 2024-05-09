import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductCard.css";

function ProductCard(props) {
  const { id, img, price, title, category, handleDeleteProduct } = props;

  return (
    <div className="product-card">
      <img src={img} alt="çanta görseli" />
      <div className="product-info">
        <strong>{title.slice(0, 20)}...</strong>
        <span>{price}₺</span>
        <b>{category}</b>
        <Button
          background="danger"
          size="sm"
          onClick={() => handleDeleteProduct(id)}
        >
          <strong>Delete</strong>
        </Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  handleDeleteProduct: PropTypes.func,
};

export default ProductCard;
