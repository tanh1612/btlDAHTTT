import CategoryRepository from "../infrastructure/repositories/CategoryRepository";

export default class CategoryService {
  constructor() {
    this.repository = new CategoryRepository();
  }

  async getCategoryList(url) {
    return await this.repository.getAll(url);
  }

  async createCategory(category) {
    return await this.repository.create(category);
  }

  async updateCategory(urlApi,categoryId,infoCategory) {
    return await this.repository.update(urlApi,categoryId,infoCategory);
  }

  async deleteCategory(category_id) {
    return await this.repository.delete(category_id);
  }
}
