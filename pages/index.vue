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
export default {
  async asyncData() {
    const allUsersQuery = `query AllMembers {
  AllMembers(filter: {active: {eq: true}}) {
    id
    avatar {
      url
    }
    name
    title
    bio
    email
    skills
    phone
    staff
  }}`;
    const res = await fetch("https://graphql.apirocket.io", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_ROCKET_KEY}`,
      },
      body: JSON.stringify({ query: allUsersQuery }),
    });
    const rawUsers = await res.json();
    const users = await rawUsers.data.AllMembers;
    return { users };
  },
};
</script>
