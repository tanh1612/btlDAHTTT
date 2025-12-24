import TagRepository from "../infrastructure/repositories/TagRepository";

export default class TagService {
  constructor() {
    this.repository = new TagRepository();
  }

  async getTagList(url) {
    return await this.repository.getAll(url);
  }

  async createTag(url,infoTag) {
    return await this.repository.create(url,infoTag);
  }

  async updateTag(urlApi,id,infoTag) {
    return await this.repository.update(urlApi,id,infoTag);
  }

  async deleteTag(urlApi,id) {
    return await this.repository.delete(urlApi,id);
  }
}
