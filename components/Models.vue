<template>
    <!-- Main modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-4xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">

            <div v-if="this.item.urlToImage" class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <img class="rounded-t-lg leading-relaxed" :src="this.item.urlToImage" alt="" />
            </div>

            <div
              v-else
              class="flex items-center leading-relaxed justify-center w-full h-48 bg-gray-300 rounded sm:w-90 dark:bg-gray-700"
            >
              <svg
                class="w-24 h-12 text-gray-200 m-4"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path
                  d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                />
              </svg>
            </div>

            <div v-if="this.item.title" class="p-5 leading-relaxed">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ this.item.title }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ this.item.description }}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ this.item.content }}
              </p>
              
            </div>

            <div v-else class="w-full p-4 leading-relaxed">
              <div
                class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
              ></div>
              <div
                class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
              ></div>
              <div
                class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
              ></div>
              <div
                class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
              ></div>
              <div
                class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
              ></div>
              <div
                class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
              ></div>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="ReadAricle()"
              data-modal-hide="defaultModal"
              type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Read Full Article
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring- -300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "models",
  props: {
    item: {
      source: [Object],
      author: String,
      content: String,
      description: String,
      publishedAt: Date,
      title: String,
      url: String,
      urlToImage: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    ReadAricle() {
      window.open(this.item.url);
    },
  },
};
</script>
