import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
// import Products from "./components/Products/Products";
import "react-toastify/dist/ReactToastify.css";
// import { WebSocket } from "vite";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Çorap");
  
  useEffect(() => {
    console.log("İlk yüklendiğinde çalıştı!");
  }, []);

  useEffect(() => {
    console.log("İlk yüklendiğinde ve güncellendiğinde çalıştı!");
  }, [count]);

  useEffect(() => {
    
    // component ekrandan kaldırıldığı çalıştı!

    // clean-up function
    return () => {
      console.log("Ekrandan kaldırıldığında");
      // WebSocket.CLOSED();
    };
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
