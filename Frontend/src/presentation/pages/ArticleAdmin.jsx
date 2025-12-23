import { useEffect, useState } from "react";
import Article from "../components/Article";
import ArticleNotApproved from "../components/ArticleNotApproved";
import ArticleService from "../../usecases/ArticleService";
import { API_URL_ADMIN } from "../../constants/api";
import { useSelector } from "react-redux";

export default function ArticleAdmin() {
  const state = useSelector(state => state.reducerArticle);
  const [data, setData] = useState({
    articles: [],
    articlePendings: []
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const newArticleService = new ArticleService();
        const res = await newArticleService.getArticleList(API_URL_ADMIN);
        if (res.code === 200) {
          setData({
            articles: res.articles,
            articlePendings: res.articlePendings
          });
        }
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchApi();
  }, []);
  return (
    <>
      {state.upload?.allArticle && <Article data={data.articles} />}
      {state.upload?.approvedArticle && <ArticleNotApproved data={data.articlePendings}/>}
    </>
  );
}
