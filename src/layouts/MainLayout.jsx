import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <Header />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
