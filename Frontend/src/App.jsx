import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Dashboard from "./presentation/pages/Dashboard";
import ArticleAdmin from "./presentation/pages/ArticleAdmin";
import LayoutAdmin from "./presentation/components/LayoutAdmin";
import CategoryAndTag from "./presentation/pages/CategoryAndTag";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="" element={<Dashboard />} />
            <Route path=":articles" element={<ArticleAdmin />} />
            <Route path="category-tag" element={<CategoryAndTag />} />

          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
