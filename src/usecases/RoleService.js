import RoleRepository from "../infrastructure/repositories/RoleRepository";

export default class RoleService {
  constructor() {
    this.repository = new RoleRepository();
  }

  async getRoleList() {
    return await this.repository.getAll();
  }

  async createRole(role) {
    return await this.repository.create(role);
  }

  async updateRole(role) {
    return await this.repository.update(role);
  }

  async deleteRole(role_id) {
    return await this.repository.delete(role_id);
  }
}
