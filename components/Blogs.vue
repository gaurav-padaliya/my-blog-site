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
                    data-dropdown-toggle="dropdownNavbar"
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
                    id="dropdownNavbar"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li v-for="(list ,index) in category" :key="index">
                        <a
                          @click="handleClick(list)"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >{{list}}</a
                        >
                      </li>
        
                    </ul>
                   
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                    >Tags</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                    >Comments</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main class="container mx-auto py-8">
     
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-2">Latest Posts</h2>
            <div class="flex flex-wrap justify-around m-4 ">
              <Post v-for="list in listItems" :key="list.id" :item = "list"/>
            </div>
          </div>
          

          

    </main>
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
    };
  },
  created() {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-04-07&sortBy=publishedAt&apiKey=95082c1e818d4654bc406f1a84aece42"
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
    handleClick(category){
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=95082c1e818d4654bc406f1a84aece42`
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
      
    }
  }
};

</script>
