<template>
  <div class="hello">
    <h1>mongodb express vuejs search operation</h1>
    <h1>{{posts.text }}</h1>

    <div class="posts-container"
    v-for="(post, index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"

    >
    <p class="text">{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
import postService from '../postService';
export default {
  name: 'postsComponent',
  data() {
   return {
     posts: [],
     error: '',
     text: ''
   }
  },
  async created(){
   try{
   this.posts = await postService.getPosts();
   }catch(err){
     this.error = err.message;
   }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
