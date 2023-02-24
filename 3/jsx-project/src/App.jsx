import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: "blue",
            backgroundColor: "gold",
            border: "1px solid blue",
          }}
        >
          My App
        </h1>
      </div>
      <Button />
    </>
  );
}

export default App;
