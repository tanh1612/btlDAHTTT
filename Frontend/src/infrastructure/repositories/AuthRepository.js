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

}
