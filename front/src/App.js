import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/home";
import {Privacy} from "./pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/privacy"} element={<Privacy/>}></Route>
          <Route path={"*"} element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
