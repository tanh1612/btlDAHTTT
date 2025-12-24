import CategoryRepository from "../infrastructure/repositories/CategoryRepository";

export default class CategoryService {
  constructor() {
    this.repository = new CategoryRepository();
  }

  async getCategoryList(url) {
    return await this.repository.getAll(url);
  }

  async createCategory(url,infoCategory) {
    return await this.repository.create(url,infoCategory);
  }

  async updateCategory(urlApi,categoryId,infoCategory) {
    return await this.repository.update(urlApi,categoryId,infoCategory);
  }

  async deleteCategory(urlApi,id) {
    return await this.repository.delete(urlApi,id);
  }
}
