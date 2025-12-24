import { useEffect, useState } from "react";

const Article = ({ data }) => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    setArticle(data);
  }, [data]);

  return (
    <>
      <div className="article py-5">
        <div className="container">
          <div className="row">
            {articles &&
              articles.map((article) => {
                return (
                  <div className="col-md-6" key={article._id}>
                    <div className="card border-0 mb-4">
                      <div className="card-img">
                        <a href="">
                          <img src={article.thumbnail} alt="" />
                        </a>
                        <div className="card-overlay">
                          <span className="tag">
                            <a href="">powershell</a>
                          </span>
                          <span className="tag">
                            <a href="">tips-tricks</a>
                          </span>
                        </div>
                      </div>
                      <div className="card-body pt-3">
                        <a href="">{article.title}</a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="text-center -3">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={40}
                height={40}
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
