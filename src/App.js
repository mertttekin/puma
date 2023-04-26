import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
