import axios from "axios";

export default class TagRepository {
  constructor() {
    this.baseUrl = "";
  }

  async getAll(url) {
    try {
      const res = await axios.get(url + "/tag");
      return res.data;
    } catch (error) {
      console.error("Lỗi lấy danh sách tag: ", error);
      return [];
    }
  }

  async create(url,infoTag) {
    try {
      const res = await axios.post(url + "/tag/create", infoTag);
      return res.data;
    } catch (error) {
      console.error("Lỗi tạo mới tag: ", error);
      return [];
    }
  }

  async update(urlApi,id,infoTag) {
    try {
      const url = `${urlApi}/tag/update/${id}`;
      const res = await axios.put(url, infoTag);
      return res.data;
    } catch (error) {
      console.error("Lỗi chỉnh sửa tag: ", error);
      return [];
    }
  }

  async delete(urlApi,id) {
    try {
      const url = `${urlApi}/tag/delete/${id}`;
      const res = await axios.delete(url);
      return res.data;
    } catch (error) {
      console.error("Lỗi xóa tag: ", error);
      return false;
    }
  }
}
