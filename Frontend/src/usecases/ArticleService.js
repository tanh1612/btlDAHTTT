import ArticleRepository from "../infrastructure/repositories/ArticleRepository";

export default class ArticleService {
  constructor() {
    this.repository = new ArticleRepository();
  }

  async getArticleList(url) {
    return await this.repository.getAll(url);
  }

  async createArticle(article) {
    return await this.repository.create(article);
  }

  async updateArticle(urlApi,article_id,infoArticle) {
    return await this.repository.update(urlApi,article_id,infoArticle);
  }

  async deleteArticle(article_id) {
    return await this.repository.delete(article_id);
  }
  async getArticlesApproved(url) {
    return await this.repository.getArticlesApproved(url);
  }
}
