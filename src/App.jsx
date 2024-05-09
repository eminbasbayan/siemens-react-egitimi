import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
// import Products from "./components/Products/Products";
import "react-toastify/dist/ReactToastify.css";
// import { WebSocket } from "vite";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Çorap");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("işlem tamamlandı"));
  }, []);

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <p>{count}</p>
      <button onClick={() => setTitle("Şapla")}>Title Güncelle</button>
      {title}
      {/* <Products /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
