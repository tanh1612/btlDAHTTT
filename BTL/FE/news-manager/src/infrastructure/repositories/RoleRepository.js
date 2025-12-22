import axios from "axios";

export default class RoleRepository {
  constructor() {
    this.baseUrl = "";
  }

  async getAll() {
    try {
      const res = await axios.get(this.baseUrl);
      return res.data;
    } catch (error) {
      console.error("Lỗi lấy danh sách role: ", error);
      return [];
    }
  }

  async create(role) {
    try {
      const res = await axios.post(this.baseUrl, role);
      return res.data;
    } catch (error) {
      console.error("Lỗi tạo mới role: ", error);
      return [];
    }
  }

  async update(role) {
    try {
      const url = `${this.baseUrl}/${role.role_id}`;
      const res = await axios.put(url, role);
      return res.data;
    } catch (error) {
      console.error("Lỗi chỉnh sửa role: ", error);
      return [];
    }
  }

  async delete(role_id) {
    try {
      const url = `${this.baseUrl}/${role_id}`;
      await axios.delete(url);
      return true;
    } catch (error) {
      console.error("Lỗi xóa role: ", error);
      return false;
    }
  }
}
