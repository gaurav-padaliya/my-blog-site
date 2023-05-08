<!-- components/Comment.vue -->
<template>
    <div class="py-2">
      <div class="bg-white rounded-lg shadow p-4">
        <p class="text-gray-800">{{ this.comment.text }}</p>
        <span>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">reply</button>
        </span>
        <div class="ml-4">
          <comment v-for="childComment in comment.children" :key="childComment.id" :comment="childComment" />
        </div>
      </div>
    </div>
  </template>
  
  <script>


  export default {
    name: 'Comment',
    props: {
      comment: {
        type: {
            id:Number,
            text:String,
            children:Array,
        }
      }
    },
    components: {
      Comment: () => import('./Comment.vue')
    }
    ,
    
  }
  </script>
  