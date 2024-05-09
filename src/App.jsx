// import Products from "./components/Products/Products";

function App() {
  let products = [{ id: 1, name: "Çanta" }];
  console.log(products);
  
  function handleClick() {
    console.log("run!");
  }

  function addNewProduct(newProduct) {
    products = [...products, newProduct];
    console.log(products);
  }

  return (
    <div className="app">
      <button onClick={handleClick}>Sepete Ekle</button>
      <button onClick={() => addNewProduct({ id: 2, name: "Çorap" })}>
        Yeni Ürün Ekle
      </button>
    </div>
  );
}

export default App;
