<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 bg-gray-200">
    <user
      v-for="user in users"
      :key="user.id"
      :user='user'
    />
  </div>
</template>

<script>
import ALL_MEMBERS from "@/graphql/ALL_MEMBERS.gql";
export default {
  async asyncData({ $graphql }) {
    const data = await $graphql.request(ALL_MEMBERS);
    const users = await data.AllMembers;
    return { users };
  },
};
</script>
