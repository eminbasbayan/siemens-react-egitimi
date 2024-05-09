import { useState } from "react";

function ProductForm() {
  const [image, setImage] = useState("");

  function handleChange(event) {
    setImage(event.target.value);
  }

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Product Image</label>
        <input type="text" className="form-control" onChange={handleChange} />
      </div>
      {image}
      <div className="mb-3">
        <label className="form-label">Product Title</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Product Price</label>
        <input type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
