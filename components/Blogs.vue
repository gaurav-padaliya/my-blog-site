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
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                    >Company</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                    >Team</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                    >Features</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main class="container mx-auto py-8">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-2/3 px-4">
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-2">Latest Posts</h2>
            <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Post Image"
                    class="w-full"
                  />
                  <div class="p-4">
                    <h3 class="text-xl font-bold mb-2">Post Title</h3>
                    <p class="text-gray-700 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed gravida euismod sapien, vel iaculis nulla maximus in.
                    </p>
                    <nuxt-link
                      to="/post"
                      class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                      >Read More</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Post Image"
                    class="w-full"
                  />
                  <div class="p-4">
                    <h3 class="text-xl font-bold mb-2">Post Title</h3>
                    <p class="text-gray-700 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed gravida euismod sapien, vel iaculis nulla maximus in.
                    </p>
                    <nuxt-link
                      to="/post"
                      class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                      >Read More</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
