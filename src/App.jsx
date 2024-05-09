// import Products from "./components/Products/Products";

import { useState } from "react";

// hooks
function App() {
  //const [state, setState] = useState(initialValue);
  const [name, setName] = useState("Emin");

  // let name = "Emin"; // Ahmet

  console.log("component yeniden render edildi!");

  function handleClick() {
    // name = "Ahmet";
    setName("Ahmet");
  }

  return (
    <div className="app">
      <p>{name}</p>
      <button onClick={handleClick}>İsmi Değiştir</button>
    </div>
  );
}

export default App;
