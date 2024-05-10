import { useSelector } from "react-redux";
import ProductCard from "../components/Products/ProductCard";

const CartPage = () => {
  const { cartItems, totals } = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1>Sepet Sayfasına Hoşgeldiniz!</h1>

      <div className="d-flex ">
        {cartItems.map((item) => (
          <ProductCard key={item.id} item={item} cart />
        ))}

        <div className="totals">
          <strong>Sepet Tutarı</strong>: {totals}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
