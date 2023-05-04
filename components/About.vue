<template>
  <div class="container">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-600"
    >
      About Us
    </h1>
    <p
      class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      We are a team of passionate developers who love creating amazing web
      applications that solve real-world problems. Our goal is to deliver
      high-quality software that makes a difference in people's lives.
    </p>
    <h2
      class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-800 md:text-2xl lg:text-4xl dark:text-gray-300"
    >
      Our Team
    </h2>
    <div class="card-group">
      <div class="card">
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://i.pravatar.cc/299"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              John Doe
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lead Developer
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="card-group">
      <div class="card">
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://i.pravatar.cc/300"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Jane Doe
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              UI Designer
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="card-group">
      <div class="card">
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://i.pravatar.cc/301"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Bob Smith
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Project Manager
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1,
h2 {
  text-align: center;
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 40px;
}

.card {
  max-width: 500px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card img {
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 20px;
}
</style>
