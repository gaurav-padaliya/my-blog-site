<template>
  <div>
    <header class="bg-gray-900 text-white dark:bg-gray-900">
      <div class="container mx-auto py-4">
        <nav class="bg-gray-50 dark:bg-gray-800">
          <div class="max-w-screen-xl px-4 py-3 mx-auto">
            <div class="flex items-center">
              <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                    >Post</a
                  >
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar1"
                    class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Catagory
                    <svg
                      class="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <!-- Dropdown menu -->
                  <div
                    id="dropdownNavbar1"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li v-for="(list ,index) in category" :key="index">
                        <a
                          @click="changeCategory(list)"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >{{list}}</a
                        >
                      </li>
        
                    </ul>
                   
                  </div>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Tags
                    <svg
                      class="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <!-- Dropdown menu -->
                  <div
                    id="dropdownNavbar"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li v-for="item in this.tags" :key="item.id">
                        <a
                          @click="changeTag(item.tag)"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >{{item.name}}</a
                        >
                      </li>
        
                    </ul>
                   
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main v-if="!this.loading" class="container mx-auto py-8">
     
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-2">Latest Posts</h2>
            <div class="flex flex-wrap justify-around m-4 ">
              <Post v-for="list in listItems" :key="list.id" :item = "list"/>
            </div>
          </div>
          

          

    </main>    
    <div v-else role="status" class ="loader">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>

  </div>
</template>
<script>
import Post from './Post.vue';

export default {
  name: "blog",
  data() {
    return {
      listItems: [
        { ids: 1, name: "gaurav" },
        { ids: 2, name: "gaurav" },
        { ids: 3, name: "gaurav" },
        { ids: 4, name: "gaurav" },
        { ids: 5, name: "gaurav" },
        { ids: 6, name: "saurav" },
        { ids: 7, name: "gaurav" },
        { ids: 8, name: "saurav" },
        { ids: 9, name: "gaurav" },
        { ids: 10, name: "saurav" },
        { ids: 11, name: "gaurav" },
        { ids: 12, name: "saurav" },
      ],
      category: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
      tags: [
        {id:1,name:"India",tag:"in"},
        {id:2,name:"United State",tag:"us"},
      ],
      categoryChange:"general",
      tagChange:"in",
      loading:false,
    };
  },
  created() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=95082c1e818d4654bc406f1a84aece42"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.listItems = data.articles
        // You can access the news articles data from the `data` object here.
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods:{
    changeTag(tag){
      this.tagChange = tag 
    },
    changeCategory(category){
      this.categoryChange = category
    },
    handleClick(){
      this.loading = true;
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${this.tagChange}&category=${this.categoryChange}&apiKey=95082c1e818d4654bc406f1a84aece42`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.listItems = data.articles
        this.loading = false;
        // You can access the news articles data from the `data` object here.
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
      
    }
  },
  watch: {
    categoryChange(){
        this.handleClick();
      },
    tagChange(){
        this.handleClick();
       } 
  },
};

</script>

<style>
.loader{
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>