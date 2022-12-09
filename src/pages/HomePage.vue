<template>
  <div class="container-fluid">
    <div v-for="b in blogs" class="row card m-3">
      <BlogCard :blog="b" />
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState.js";
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { blogsService } from '../services/BlogsService.js'
import BlogCard from "../components/BlogCard.vue";

export default {
  setup() {

    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
    components: { BlogCard }
  }
}
</script>

<style scoped lang="scss">

</style>
