import axios from "axios";

export default class TagRepository {
  constructor() {
    this.baseUrl = "";
  }

  async getAll() {
    try {
      const res = await axios.get(this.baseUrl);
      return res.data;
    } catch (error) {
      console.error("Lỗi lấy danh sách tag: ", error);
      return [];
    }
  }

  async create(tag) {
    try {
      const res = await axios.post(this.baseUrl, tag);
      return res.data;
    } catch (error) {
      console.error("Lỗi tạo mới tag: ", error);
      return [];
    }
  }

  async update(tag) {
    try {
      const url = `${this.baseUrl}/${tag.tag_id}`;
      const res = await axios.put(url, tag);
      return res.data;
    } catch (error) {
      console.error("Lỗi chỉnh sửa tag: ", error);
      return [];
    }
  }

  async delete(tag_id) {
    try {
      const url = `${this.baseUrl}/${tag_id}`;
      await axios.delete(url);
      return true;
    } catch (error) {
      console.error("Lỗi xóa tag: ", error);
      return false;
    }
  }
}
