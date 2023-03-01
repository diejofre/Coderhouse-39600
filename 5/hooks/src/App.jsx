import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [count]);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h3>{user.name}</h3>
        <h4>email: {user.email}</h4>
        {/* {users.map((user) => {
          return <h3>{user.name}</h3>;
        })} */}
      </div>
    </div>
  );
}

export default App;
