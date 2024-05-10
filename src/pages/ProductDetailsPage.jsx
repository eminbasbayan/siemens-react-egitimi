import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
  });

  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [params.id]);

  console.log(params);

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
