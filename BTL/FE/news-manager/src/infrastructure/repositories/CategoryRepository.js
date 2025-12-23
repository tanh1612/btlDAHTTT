import axios from "axios";

export default class CategoryRepository {
  constructor() {
    this.baseUrl = "";
  }

  async getAll(url) {
    try {
      const res = await axios.get(url + "/category");
      return res.data;
    } catch (error) {
      console.error("Lỗi lấy danh sách category: ", error);
      return [];
    }
  }

  async create(category) {
    try {
      const res = await axios.post(this.baseUrl, category);
      return res.data;
    } catch (error) {
      console.error("Lỗi tạo mới category: ", error);
      return [];
    }
  }

  async update(urlApi,categoryId,infoCategory) {
    try {
      const url = `${urlApi}/category/update/${categoryId}`;
      const res = await axios.put(url, infoCategory);
      return res.data;
    } catch (error) {
      console.error("Lỗi chỉnh sửa category: ", error);
      return [];
    }
  }

  async delete(category_id) {
    try {
      const url = `${this.baseUrl}/${category_id}`;
      await axios.delete(url);
      return true;
    } catch (error) {
      console.error("Lỗi xóa category: ", error);
      return false;
    }
  }
}
