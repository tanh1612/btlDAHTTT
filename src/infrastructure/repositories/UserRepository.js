import axios from "axios";

export default class UserRepository {
  constructor() {
    this.baseUrl = "";
  }

  async getAll() {
    try {
      const res = await axios.get(this.baseUrl);
      return res.data;
    } catch (error) {
      console.error("Lỗi lấy danh sách user: ", error);
      return [];
    }
  }

  async create(user) {
    try {
      const res = await axios.post(this.baseUrl, user);
      return res.data;
    } catch (error) {
      console.error("Lỗi tạo mới user: ", error);
      return [];
    }
  }

  async update(user) {
    try {
      const url = `${this.baseUrl}/${user.user_id}`;
      const res = await axios.put(url, user);
      return res.data;
    } catch (error) {
      console.error("Lỗi chỉnh sửa user: ", error);
      return [];
    }
  }

  async delete(user_id) {
    try {
      const url = `${this.baseUrl}/${user_id}`;
      await axios.delete(url);
      return true;
    } catch (error) {
      console.error("Lỗi xóa user: ", error);
      return false;
    }
  }
}
