import PropTypes from "prop-types";

const Spinner = ({ type = "primary" }) => {
  return (
    <div className={`spinner-border text-${type}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

Spinner.propTypes = {
  type: PropTypes.string,
};

export default Spinner;
