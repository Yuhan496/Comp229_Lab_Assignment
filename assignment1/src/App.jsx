import { BrowserRouter } from "react-router-dom";
import "./App.css";
import mainRouter from "./mainRouter.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <mainRouter />
      </BrowserRouter>
    </>
  );
}

export default App;