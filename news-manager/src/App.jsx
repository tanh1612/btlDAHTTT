import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Dashboard from "./presentation/pages/Dashboard";
import ArticleAdmin from "./presentation/pages/ArticleAdmin";
import LayoutAdmin from "./presentation/components/LayoutAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="articles" element={<ArticleAdmin />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
