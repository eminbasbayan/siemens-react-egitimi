import { ToastContainer } from "react-toastify";
import Products from "./components/Products/Products";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="content">
        <Products />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
