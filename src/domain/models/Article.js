export class Article {
  constructor(
    article_id,
    title,
    content,
    status,
    author_id,
    category_id,
    created_at,
    updated_at
  ) {
    this.article_id = article_id;
    this.title = title;
    this.content = content;
    this.status = status;
    this.author_id = author_id;
    this.category_id = category_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
