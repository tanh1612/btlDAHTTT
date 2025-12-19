import CategoryRepository from "../infrastructure/repositories/CategoryRepository";

export default class CategoryService {
  constructor() {
    this.repository = new CategoryRepository();
  }

  async getCategoryList() {
    return await this.repository.getAll();
  }

  async createCategory(category) {
    return await this.repository.create(category);
  }

  async updateCategory(category) {
    return await this.repository.update(category);
  }

  async deleteCategory(category_id) {
    return await this.repository.delete(category_id);
  }
}
