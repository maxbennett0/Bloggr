import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log('[GETTING BLOGS]', res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }
  async postBlog(body) {
    logger.log('howdy there')
    const res = await api.post('api/blogs', body)
    logger.log(res.data)
    AppState.blogs = new Blog(res.data)

  }
}

export const blogsService = new BlogsService()