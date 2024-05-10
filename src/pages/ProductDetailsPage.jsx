import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetailsPage = () => {
  const data = useLoaderData();
  const [product] = useState(data);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={product.image} className="img-fluid" alt="Product Image" />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-3">{product.title}</h1>
          <h3 className="mb-3 text-muted">${product.price}</h3>
          <p className="mb-4">{product.description}</p>
          <div>
            <button className="btn btn-primary btn-lg me-2">Add to Cart</button>
            <button className="btn btn-outline-secondary btn-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
