import axios from "axios";

export default class AuthRepository {

  async login(url,account) {
    try {
      const res = await axios.post(url + "/login",account);
      return res.data;
    } catch (error) {
      console.error("Lỗi lấy danh sách user: ", error);
      return [];
    }
  }

  async register(url, account) {
    try {
      const res = await axios.post(url + "/register", account);
      return res.data;
    } catch (error) {
      console.error("Lỗi đăng ký tài khoản: ", error);
      return [];
    }
  }

}
