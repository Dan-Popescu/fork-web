import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Index} from "./pages/index";


function App() {
  return (
<BrowserRouter>
      <Routes>
          <Route path={"/app/connect"}></Route>
          <Route path={"/app/home"}></Route>
          <Route path={"/app/alert"}></Route>
          <Route path={"/app/cam"}></Route>
          <Route path={"/app/map"}></Route>
          <Route path={"/app/settings"}></Route>
          <Route path={"/doc"}></Route>
          <Route path={"/doc/machine_learning"}></Route>
          <Route path={"/doc/cnn"}></Route>
          <Route path={"/doc/r-cnn"}></Route>
          <Route path={"/doc/yolo"}></Route>
          <Route path={"*"} element={<Index/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
