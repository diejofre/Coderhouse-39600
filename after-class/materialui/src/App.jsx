import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";
import ButtonJSX from "./ButtonJSX";
import RecipeReviewCard from "./RecipeReviewCard";
import productos from "../productos";

function App() {
  console.log(productos);

  return (
    <>
      {/* <Button color="secondary" onClick={() => alert("Click!")} variant="text">
        Text
      </Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
      <Button variant="outlined" color="error">
        Outlined
      </Button> */}
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button> */}
      {productos.map((producto) => (
        <RecipeReviewCard producto={producto} />
      ))}
    </>
  );
}

export default App;
