<!-- components/Comments.vue -->
<template>
    <div>
      <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      <form class="mt-4" @submit.prevent="submitComment">
        <div class="mb-2">
          <label class="block text-gray-700 font-bold mb-2" for="comment-text">Add a comment:</label>
          <textarea class="w-full h-16 border border-gray-400 p-2 rounded-lg" id="comment-text" v-model="newComment.text" required></textarea>
        </div>
        <div class="mb-2">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Post Comment</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import comment from "./Comment.vue";
  
  export default {
    name: 'Comments',
    data() {
      return {
        newComment: {
          text: '',
          children: []
        }
      }
    },
    props: {
      comments: {
        type: Array,
      }
    }
    ,
    computed: {
      comments() {
        console.log(this._props.comments,"hello");
        
        return this._props.comments
      }
    },
    methods: {
      submitComment() {
        if (this.newComment.text.trim()) {
          const newId = Date.now()
          const newComment = {
            id: newId,
            text: this.newComment.text.trim(),
            children: []
          }
          this.$emit('new-comment', newComment)
          this.newComment.text = ''
        }
      }
    },
    components: {
      Comment: () => import('./Comment.vue')
    }
  }
  </script>
    