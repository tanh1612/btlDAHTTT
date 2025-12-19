import ArticleRepository from "../infrastructure/repositories/ArticleRepository";

export default class ArticleService {
  constructor() {
    this.repository = new ArticleRepository();
  }

  async getArticleList() {
    return await this.repository.getAll();
  }

  async createArticle(article) {
    return await this.repository.create(article);
  }

  async updateArticle(article) {
    return await this.repository.update(article);
  }

  async deleteArticle(article_id) {
    return await this.repository.delete(article_id);
  }
}
