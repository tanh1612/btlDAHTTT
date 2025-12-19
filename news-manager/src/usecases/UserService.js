import UserRepository from "../infrastructure/repositories/UserRepository";

export default class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async getUserList() {
    return await this.repository.getAll();
  }

  async createUser(user) {
    return await this.repository.create(user);
  }

  async updateUser(user) {
    return await this.repository.update(user);
  }

  async deleteUser(user_id) {
    return await this.repository.delete(user_id);
  }
}
