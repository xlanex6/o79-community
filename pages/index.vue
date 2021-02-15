<template>
  <div>
    <Header />
    <div class="relative -mt-6 rounded shadow-sm w-3/4 sm:w-2/3 max-w-md mx-auto  bg-white">
      <div class="absolute inset-y-0  left-0 pl-3 flex items-center pointer-events-none">
        <svg
          class="h-6 w-6 text-gray-400"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
        id="query"
        autofocus
        v-model.trim="searchTerm"
        class="form-input block w-full pl-10 text-xl sm:leading-5 h-16 text-gray-700 outline-none shadow-2xl mb-8"
        placeholder="Dev, cuisinier,..."
      />
    </div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 ">
      <user
        v-for="result in usersResults"
        :key="result.id"
        :user='result'
      />
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import ALL_MEMBERS from "@/graphql/ALL_MEMBERS.gql";
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    usersResults() {
      return this.searchTerm ? this.results : this.usersFuse._docs;
    },
    results() {
      return this.usersFuse.search(this.searchTerm).map((user) => {
        return { ...user.item };
      });
    },
  },
  async asyncData({ $graphql }) {
    const data = await $graphql.request(ALL_MEMBERS);
    const users = await data.AllMembers.sort(() => Math.random() - 0.5);

    const options = {
      keys: [
        "firstName",
        "lastName",
        {
          name: "bio",
          weight: 2,
        },
        "email",
        { name: "title", weight: 3 },
        { name: "skills", weight: 2 },
      ],
    };
    const usersFuse = new Fuse(users, options);
    return { usersFuse };
  },
};
</script>
