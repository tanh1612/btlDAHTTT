import axios from "axios";

export default class ArticleRepository {
  // constructor() {
  //   this.baseUrl = "http://localhost:3000/api/v1/admin/article";
  // }

  async getAll(url) {
    try {
      const res = await axios.get(url + "/article");
      return res.data;
    } catch (error) {
      console.error("Lỗi lấy danh sách article: ", error);
      return [];
    }
  }

  async create(article) {
    try {
      const res = await axios.post(this.baseUrl, article);
      return res.data;
    } catch (error) {
      console.error("Lỗi tạo mới article: ", error);
      return [];
    }
  }

  async update(urlApi,article_id,infoArticle) {
    try {
      const url = `${urlApi}/article/update/${article_id}`;
      const res = await axios.put(url, infoArticle);
      return res.data;
    } catch (error) {
      console.error("Lỗi chỉnh sửa article: ", error);
      return [];
    }
  }

  async delete(article_id) {
    try {
      const url = `${this.baseUrl}/${article_id}`;
      await axios.delete(url);
      return true;
    } catch (error) {
      console.error("Lỗi xóa article: ", error);
      return false;
    }
  }
  async getArticlesApproved(url) {
    try {
      
      const res = await axios.get(`${url}/article/approved`);
      return res.data;
    } catch (error) {
      console.error("Lỗi xóa article: ", error);
      return false;
    }
  }
}
