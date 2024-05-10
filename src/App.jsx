import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [users, setUsers] = useState([]);

  // const fetchUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => console.log("İşlem tamamlandı!"));
  // };

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("İşlem tamamlandı!");
    }
  };

  return (
    <div className="app">
      <button className="btn btn-primary" onClick={fetchUsers}>
        Get Users
      </button>
      <br />
      {users?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <ToastContainer />
    </div>
  );
}

export default App;
