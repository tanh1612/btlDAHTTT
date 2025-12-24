import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Dashboard from "./presentation/pages/Dashboard";
import ArticleDetail from "./presentation/pages/ArticleDetail";
import ArticleAdmin from "./presentation/pages/ArticleAdmin";
import LayoutAdmin from "./presentation/components/LayoutAdmin";
import CategoryAndTag from "./presentation/pages/CategoryAndTag";
import AuthorPage from "./presentation/pages/AuthorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="article" element={<ArticleDetail />} />
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
