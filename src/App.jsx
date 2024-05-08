import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          columnGap: "10px",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
