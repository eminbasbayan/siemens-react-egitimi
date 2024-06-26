import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/404Page";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
          loader: async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();

            if (!res.ok) {
              throw new Error("Something went wrong!");
            }

            return data;
          },
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailsPage />,
          loader: async ({ params }) => {
            const res = await fetch(
              `https://fakestoreapi.com/products/${params.id}`
            );
            const data = await res.json();

            if (!res.ok) {
              throw new Error("Something went wrong!");
            }

            return data;
          },
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
