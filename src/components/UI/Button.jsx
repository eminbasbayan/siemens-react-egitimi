import PropTypes from "prop-types";
import "./Button.css";

function Button({ background, size, title, className }) {
  const sizeClass = `btn-${size}`;
  const backgroundClass = `btn-${background}`;
  const classes = `${sizeClass} ${backgroundClass} ${className}`;

  return <button className={classes}>{title ? title : "Sepete Ekle"}</button>;
}

Button.propTypes = {
  background: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
