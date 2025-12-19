import axios from "axios";

export default class ArticleRepository {
  constructor() {
    this.baseUrl = "";
  }

  async getAll() {
    try {
      const res = await axios.get(this.baseUrl);
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

  async update(article) {
    try {
      const url = `${this.baseUrl}/${article.article_id}`;
      const res = await axios.put(url, article);
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
}
