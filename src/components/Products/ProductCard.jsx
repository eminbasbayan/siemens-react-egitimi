import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductCard.css";

function ProductCard(props) {
  const { id, img, price, title, description, handleDeleteProduct } = props;

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 15)}...</h5>
        <p className="card-text">{description.slice(0, 50)}...</p>
        <p className="card-text">{price}₺</p>
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
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  handleDeleteProduct: PropTypes.func,
};

export default ProductCard;
