import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
  ]);

  return (
    <div className="app">
      <Header />
      <section className="content">
        <RouterProvider router={router} />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
