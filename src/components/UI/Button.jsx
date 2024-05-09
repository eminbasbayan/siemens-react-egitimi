import PropTypes from "prop-types";
import "./Button.css";

function Button({ background, size, className, children, onClick }) {
  const sizeClass = `btn-${size}`;
  const backgroundClass = `btn-${background}`;
  const classes = `${sizeClass} ${backgroundClass} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children ? children : "Sepete Ekle"}
    </button>
  );
}

Button.propTypes = {
  background: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
