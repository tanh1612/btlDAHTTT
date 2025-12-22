import ArticleApprovalHistoryRepository from "../infrastructure/repositories/ArticleApprovalHistoryRepository";

export default class CategoryService {
  constructor() {
    this.repository = new ArticleApprovalHistoryRepository();
  }
}
