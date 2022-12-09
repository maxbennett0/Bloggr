<template>
  <div>
    <form @submit.prevent="postBlog()">
      <div class="card text-center p-3">
        <h1>Create your post</h1>
        <div class="my-2">
          <br>
          <input type="text" placeholder="Title" name="title" class="my-1">
          <br>
          <textarea name="body" id="" cols="50" rows="5" class="my-1 scrollable"></textarea>
          <br>
          <input type="text" placeholder="imgURL" name="imgUrl" class="my-1">
        </div>
        <button class="btn btn-primary">Create!</button>
      </div>
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger.js";
import { blogsService } from "../services/BlogsService.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async postBlog() {
        try {
          await blogsService.postBlog(editable.value)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>