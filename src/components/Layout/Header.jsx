const Header = () => {
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button className="btn btn-outline-secondary me-1" type="button">
              <i className="bi bi-cart3"></i>
              <span className="badge bg-danger">{0}</span>
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
