import { useEffect, useState } from "react";
import Article from "../components/Article";
import ArticleService from "../../usecases/ArticleService";
import { API_URL_CLIENT } from "../../constants/api";

export default function ArticleClient(){
    const [data, setData] = useState([]);
      useEffect(() => {
        const fetchApi = async () => {
          try {
            const newArticleService = new ArticleService();
            const res = await newArticleService.getArticleList(API_URL_CLIENT);
            if (res.code === 200) {
              setData(res.articles);
            }
          } catch (error) {
            throw new Error(error);
          }
        };
    
        fetchApi();
      }, []);
    return <>
        <Article data={data}/>
    </>
}