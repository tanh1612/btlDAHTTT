import { useEffect, useState } from "react";
import ArticleService from "../../usecases/ArticleService";
import { API_URL_ADMIN } from "../../constants/api";
import { PiArticleLight } from "react-icons/pi";
import { TbArticleOff } from "react-icons/tb";

export default function ApprovalHistory() {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const newArticleService = new ArticleService();
        const res = await newArticleService.getArticlesApproved(API_URL_ADMIN);
        if (res.code === 200) {
          setArticle(res.articleApproved);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="article-approved">
        <table>
          <thead>
            <tr>
              <th>Tên bài viết</th>
              <th>Hành động</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {articles &&
              articles.map((article) => {
                return (
                  <tr key={article._id}>
                    <td>
                      <div className="title">
                        <img src={article.thumbnail} />
                        <p>{article.title}</p>
                      </div>
                    </td>
                    <td>
                      <div className="status">
                        {article.status === "APPROVED" ? (
                          <PiArticleLight />
                        ) : (
                          <TbArticleOff />
                        )}
                        {article.status === "APPROVED" ? (
                          <span className="text-success">Đã duyệt</span>
                        ) : (
                          <span className="text-danger">Từ chối</span>
                        )}
                      </div>
                    </td>
                    <td>
                      {new Date(article.createdAt)
                        .getDate()
                        .toString()
                        .padStart(0, "2") +
                        "/" +
                        (new Date(article.createdAt).getMonth() + 1)
                          .toString()
                          .padStart(0, "2") +
                        "/" +
                        new Date(article.createdAt)
                          .getFullYear()
                          .toString()
                          .padStart(0, "2")}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
