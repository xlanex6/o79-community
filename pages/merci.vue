<template>

  <div class="min-h-screen flex">

    <div class="w-full md:w-2/3 min-h-screen px-4 bg-red-600 flex justify-around items-center">
      <div class="bg-white shadow sm:rounded-lg sm:max-h-28 ">
        <div class="px-4 py-5 sm:p-6">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Merci
              </h3>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, libero. Illum suscipit amet labore saepe.
                </p>
              </div>
            </div>
            <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
              <nuxt-link
                to='/'
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Retour
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="md:w-1/3 hidden md:block relative h-full">

  <p class="text-black font-extrabold absolute custom -left-12">ō79</p>

</div>

  </div>
</template>

<style>
.custom {
  font-size: 300px;
  top: 50%
}
</style>
