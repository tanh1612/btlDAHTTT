import { Col, Row } from "antd";

import { Card } from "antd";
import { MdArticle } from "react-icons/md";
import { PiArticleLight } from "react-icons/pi";
import { TbArticleOff } from "react-icons/tb";
import ArticleService from "../../usecases/ArticleService";
import { useEffect, useState } from "react";
import ChartArticle from "../components/ChartArticle";
import { API_URL_ADMIN } from "../../constants/api";

export default function Dashboard() {
  
  const [articles,setArticles] = useState({
    data: [],
    articleStatusQuantity: {
    approvedArticle: 0,
    pendingArticle: 0,
    rejectArticle: 0,
    totalArticle: 0
  }
  });
  useEffect(() => {
    const newArticleService = new ArticleService();
    const fetchApi = async() => {
      try{
        const res = await newArticleService.getArticleList(API_URL_ADMIN);
        if(res.code === 200){
          const approvedArticleQuantity = res.articles.filter(item => item.status === "APPROVED");
          const pendingArticleQuantity = res.articles.filter(item => item.status === "PENDING");
          const rejectArticleQuantity = res.articles.filter(item => item.status === "REJECT");

          setArticles({
            data: res.articles,
            articleStatusQuantity: {
              approvedArticle: approvedArticleQuantity.length,
              pendingArticle: pendingArticleQuantity.length,
              rejectArticle: rejectArticleQuantity.length,
              totalArticle: res.articles.length
            }
          });
        }
      }

      catch(error){
        throw new Error(error);
      }
       
    }

    fetchApi();

  },[]);
  return (
    <>
      <div className="dashboard">
        <div className="main-content">
          <Row>
            <Col className="py-2">
              <Row>
                <div className="statistic-article">
                  <Card style={{ width: 300 }}>
                    <div className="icon">
                      <MdArticle />
                    </div>
                    <div className="information-article">
                      <span>Tổng bài đăng</span>
                      <span>{articles.articleStatusQuantity.totalArticle}</span>
                    </div>
                  </Card>
                  <Card style={{ width: 300 }}>
                    <div className="icon">
                      <PiArticleLight />
                    </div>
                    <div className="information-article">
                      <span>Bài đang chờ duyệt</span>
                      <span>{articles.articleStatusQuantity.pendingArticle}</span>
                    </div>
                  </Card>
                  <Card style={{ width: 300 }}>
                    <div className="icon">
                      <TbArticleOff />
                    </div>
                    <div className="information-article">
                      <span>Bài đã từ chối</span>
                      <span>{articles.articleStatusQuantity.rejectArticle}</span>
                    </div>
                  </Card>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="chart">
          <ChartArticle articleStatusQuantity={articles.articleStatusQuantity}/>

        </div>
      </div>
    </>
  );
}
