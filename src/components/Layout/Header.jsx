import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link  ${isActive && "fw-bold"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary me-1"
              type="button"
              onClick={() => navigate("/cart")}
            >
              <i className="bi bi-cart3"></i>
              <span className="badge bg-danger">{cart.cartItems.length}</span>
            </button>
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-box-arrow-in-right"></i> Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
