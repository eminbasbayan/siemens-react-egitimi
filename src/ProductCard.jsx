import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="çanta görseli"
      />
      <div className="product-info">
        <strong>Title</strong>
        <span>100₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
