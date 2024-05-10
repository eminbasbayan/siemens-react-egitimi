import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { item, handleDeleteProduct, addToCart } = props;
  const { id, image, price, title, description } = item;
  const navigate = useNavigate();
  const cartItem = { id, image, price, title, description };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" onClick={() => navigate(`/product/${id}`)}>
          {title.slice(0, 15)}...
        </h5>
        <p className="card-text">{description.slice(0, 40)}...</p>
        <p className="card-text">{price}₺</p>
        <Button
          background="primary"
          onClick={() => addToCart(cartItem)}
          className={"w-100 mb-2"}
        >
          <strong>Add To Cart</strong>
        </Button>
        <Button
          background="danger"
          onClick={() => handleDeleteProduct(id)}
          className={"w-100"}
        >
          <strong>Delete</strong>
        </Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
};

export default ProductCard;
