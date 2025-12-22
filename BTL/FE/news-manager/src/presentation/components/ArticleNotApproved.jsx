import { IoMdCloseCircleOutline } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import ArticleService from "../../usecases/ArticleService";
import { useSelector } from "react-redux";
import { API_URL_ADMIN } from "../../constants/api";
import { Alert } from "antd";
export default function ArticleNotApproved({ data }) {
  const user = useSelector((state) => state.reducerAuth);
  const [articles, setArticle] = useState([]);
  const [showAlert, isShowAlert] = useState({
    title: "",
    type: "",
    show: false,
  });

  useEffect(() => {
    let timer;
    if (showAlert.show) {
      timer = setTimeout(() => {
        isShowAlert({
          ...showAlert,
          show: false,
        });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);
  useEffect(() => {
    setArticle(data);
  }, [data]);
  const handleUpdateStatusArticle = async (article_id, action) => {
    if (user) {
      const newArticleService = new ArticleService();
      const res = await newArticleService.updateArticle(
        API_URL_ADMIN,
        article_id,
        {
          approver_id: user._id,
          action,
        }
      );
      console.log(res);
      if (res.code === 200) {
        isShowAlert({
          title: res.message,
          type: "success",
          show: true,
        });
      } else {
        isShowAlert({
          title: "res.message",
          type: "error",
          show: true,
        });
      }
    } else {
      isShowAlert({
        title: "Hãy đăng nhập để cập nhật bài đăng",
        type: "error",
        show: true,
      });
    }
  };
  return (
    <>
      {showAlert.show && (
        <Alert
          title={showAlert.title}
          type={showAlert.type}
          closable={{ closeIcon: true, "aria-label": "close" }}
        />
      )}
      <div className="article-not-approved">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Action</th>
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
                    <td>{article.author_email}</td>
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
                    <td>
                      <div className="icon">
                        <IoMdCloseCircleOutline
                          className="icon-close"
                          onClick={() =>
                            handleUpdateStatusArticle(article._id, "REJECT")
                          }
                        />
                        <TiTickOutline
                          className="icon-tick"
                          onClick={() =>
                            handleUpdateStatusArticle(article._id, "APPROVED")
                          }
                        />
                      </div>
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
