import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/UI/Spinner";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    setUsers([]);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("İşlem tamamlandı!");
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <button className="btn btn-primary" onClick={fetchUsers}>
        Get Users
      </button>
      <br />
      <br />
      {isLoading && <Spinner type="danger" />}
      <br />
      {users?.map((user) => (
        <div className="d-flex flex-column mt-2" key={user.id}>
          <strong>Name: {user.name}</strong>
          <span>Email: {user.email}</span>
          <span>Phone: {user.phone}</span>
          <span>Username: {user.username}</span>
          <span>Website: {user.website}</span>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default App;
