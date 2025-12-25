import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Dashboard from "./presentation/pages/Dashboard";
import ArticleAdmin from "./presentation/pages/ArticleAdmin";
import LayoutAdmin from "./presentation/components/LayoutAdmin";
import CategoryAndTag from "./presentation/pages/CategoryAndTag";
import AuthorPage from "./presentation/pages/AuthorPage";
import CreateCategory from "./presentation/pages/CreateCategory";
import CreateTag from "./presentation/pages/CreateTag";
import ArticleDetail from "./presentation/pages/ArticleDetail";
import ApprovalHistory from "./presentation/pages/ApprovalHistory";


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
            <Route path="articles" element={<ArticleAdmin />} />
            <Route path="category-tag" element={<CategoryAndTag />} />
            <Route path="category-tag/category/create" element={<CreateCategory />} />
            <Route path="category-tag/tag/create" element={<CreateTag />} />
            <Route path="approval-history" element={<ApprovalHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
