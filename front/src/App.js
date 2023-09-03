import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Index} from "./pages/index";
import {Connect} from "./pages/connect";
import {Home} from "./pages/home";
import {Alert} from "./pages/alert";
import {Cam} from "./pages/cam";
import {Map} from "./pages/map";
import {Settings} from "./pages/settings";
import {Doc} from "./pages/doc/doc";
import {Machine_learning} from "./pages/doc/machine_learning";
import {Cnn} from "./pages/doc/cnn";
import {Rcnn} from "./pages/doc/rcnn";
import {Yolo} from "./pages/doc/yolo";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/app/connect"} element={<Connect/>}></Route>
          <Route path={"/app/home"} element={<Home/>}></Route>
          <Route path={"/app/alert"} element={<Alert/>}></Route>
          <Route path={"/app/cam"} element={<Cam/>}></Route>
          <Route path={"/app/map"} element={<Map/>}></Route>
          <Route path={"/app/settings"} element={<Settings/>}></Route>
          <Route path={"/doc"} element={<Doc/>}></Route>
          <Route path={"/doc/machine_learning"} element={<Machine_learning/>}></Route>
          <Route path={"/doc/cnn"} element={<Cnn/>}></Route>
          <Route path={"/doc/r-cnn"} element={<Rcnn/>}></Route>
          <Route path={"/doc/yolo"} element={<Yolo/>}></Route>
          <Route path={"*"} element={<Index/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
