import TagRepository from "../infrastructure/repositories/TagRepository";

export default class TagService {
  constructor() {
    this.repository = new TagRepository();
  }

  async getTagList() {
    return await this.repository.getAll();
  }

  async createTag(tag) {
    return await this.repository.create(tag);
  }

  async updateTag(tag) {
    return await this.repository.update(tag);
  }

  async deleteTag(tag_id) {
    return await this.repository.delete(tag_id);
  }
}
