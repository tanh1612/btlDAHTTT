import AuthRepository from "../infrastructure/repositories/AuthRepository";

export default class AuthService {
  constructor() {
    this.repository = new AuthRepository();
  }

  async login(url, account) {
    return await this.repository.login(url, account);
  }

  async register(url, account) {
    return await this.repository.register(url, account);
  }
}
