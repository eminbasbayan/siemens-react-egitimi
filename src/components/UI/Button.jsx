import PropTypes from "prop-types";

function Button(props) {
  const style = {
    backgroundColor: props.backgroundColor,
    padding: props.size === "large" ? "16px 32px" : "12px",
    fonSize: props.size === "large" ? "16px" : "12px",
  };
  
  return (
    <button style={style}>{props.title ? props.title : "Sepete Ekle"}</button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
