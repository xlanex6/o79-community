<template>
  <li class="col-span-1 flex flex-col text-center bg-white shadow relative">
    <div
      v-if="user.staff"
      class="absolute top-0 bg-red-500 text-white leading-6 px-2"
    >Equipe ō79</div>
    <div class="flex-1 flex flex-col p-8">
      <img
        v-if="!!user.avatar"
        class="w-32 h-32 flex-shrink-0 mx-auto bg-red-500 rounded-full object-cover"
        :src="user.avatar.url"
        :alt="`${user.firstName}`"
      />
      <h3 class="mt-6 text-gray-900 text-sm leading-5 font-medium">{{user.firstName}} <span class="uppercase">{{user.lastName}}</span> </h3>

      <div class="text-gray-500 text-sm leading-5">{{user.title}}</div>

      <div class="my-4 flex flex-wrap justify-center">

        <div
          v-for="skill in user.skills"
          :key="skill"
          class="px-2 py-1 m-1 text-red-800 text-xs leading-4 font-medium bg-red-100 rounded-full"
        >{{skill}}</div>

      </div>

      <dt class="sr-only">Présentation</dt>
      <p class="text-gray-500 text-sm leading-5">
        {{user.bio}}
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="-mt-px flex">
        <div class="w-0 flex-1 flex border-r border-gray-200">
          <a
            :href="`mailto:${user.email}`"
            class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 transition ease-in-out duration-150"
          >
            <span class="ml-3 truncate">{{user.email}}</span>
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <a
            :href="`tel:${user.phone}`"
            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 transition ease-in-out duration-150"
          >
            <span class="ml-3">{{user.phone}}</span>
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["user"],
};
</script>
