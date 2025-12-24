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

  async create(url,infoCategory) {
    try {
      const res = await axios.post(url + "/category/create", infoCategory);
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

  async delete(urlApi,id) {
    try {
      const url = `${urlApi}/category/delete/${id}`;
      const res = await axios.delete(url);
      return res.data;
    } catch (error) {
      console.error("Lỗi xóa category: ", error);
      return false;
    }
  }
}
