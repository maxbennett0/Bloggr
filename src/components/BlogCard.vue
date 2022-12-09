<template>
  <div class="col-12 p-2">
    <div class="d-flex align-items-center">
      <img class="img-fluid rounded-circle profile-picture" :src="blog.creator.picture" alt="">
      <h6 class="mx-2">{{ blog.creator.name }}</h6>
    </div>
    <h5 class="fw-bold">
      {{ blog.title }}
    </h5>
    <p>{{ blog.body.slice(0, 100) }}...</p>
    <div class="col-4">
      <img class="img-card" :src="blog.imgUrl" alt="">
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from "../models/Blog.js";
import Navbar from '../components/Navbar.vue'
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";
export default {
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
  setup() {
    return {

    }
  },
  components: { Navbar }
};
</script>


<style lang="scss" scoped>
.img-card {
  height: 30vh;
  width: 30vh;
  background-size: cover;
  background-position: center;
}

.profile-picture {
  height: 6vh;
  width: 6vh;
  object-fit: cover;
}
</style>