import PropTypes from "prop-types";
import "./Button.css";

function Button({ background, size, className, children }) {
  const sizeClass = `btn-${size}`;
  const backgroundClass = `btn-${background}`;
  const classes = `${sizeClass} ${backgroundClass} ${className}`;

  console.log(children);

  return (
    <button className={classes}>{children ? children : "Sepete Ekle"}</button>
  );
}

Button.propTypes = {
  background: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
