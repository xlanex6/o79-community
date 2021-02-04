<template>
  <div class="w-full flex min-h-screen relative">
    <div class="w-2/3">
      <h1 class="my-12 px-12 text-3xl font-bold uppercase">Ajout de membre</h1>
      <div
        class="max-w-xl m-auto mb-8"
        v-for="field in fields"
        :key="field.label"
      >
        <label
          :for="field.label"
          class="block text-sm font-medium text-gray-700 capitalize"
        >{{field.label}}</label>
        <div class="mt-1">
          <input
            v-model="user[field.model]"
            :type="field.type"
            :name="field.label"
            :id="field.label"
            class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
            :placeholder="field.placeholder"
            :aria-describedby="field.description"
          >
        </div>
        <p
          class="mt-2 text-sm text-gray-500"
          :id="field.description"
        >{{field.description}}</p>
      </div>
      <div class="max-w-xl m-auto mb-8">
        <label
          for="Avatar"
          class="block text-sm font-medium text-gray-700 capitalize"
        >Avatar</label>
        <div class="mt-1">
          <input
            v-model="user.avatar.url"
            type="text"
            name="avatar"
            id="avatar"
            class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-9/22196335_10214833047485142_3120615207947913389_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=4IwvtHmp0u8AX_Wg7Wm&_nc_ht=scontent-mrs2-2.xx&oh=f3629a1659cbfba90552ee164ccec95e&oe=60266BA0"
            aria-describedby="Avatar"
          >
        </div>
        <p
          class="mt-2 text-sm text-gray-500"
          id="avatar"
        >Copier l'adresse de votre photo de Facebook, Twitter ou autre</p>
      </div>

      <div class="flex justify-center mb-12">
        <button
          type="button"
          @click.prevent="mutateUser"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Envoyer
        </button>
      </div>

    </div>

    <div class="w-1/3 bg-red-500 px-8 pt-12">

      <div class="sticky top-12">
        <h3 class="font-bold text-xl mb-4 text-white">Apérçu</h3>
        <user
          :user='user'
          class=""
        />
      </div>
    </div>

  </div>

</template>

<script>
// import CREATE_MEMBER from "@/graphql/CREATE_MEMBER.gql";
// import raw from "@/graphql/raw.gql";
import { gql } from "graphql-request";
export default {
  name: "add",
  data() {
    return {
      fields: [
        {
          label: "Prénom",
          placeholder: "Jean Michel",
          model: "firstName",
          type: "text",
          description: "prénom",
        },
        {
          label: "Nom",
          placeholder: "MACHIN",
          model: "lasstName",
          type: "text",
          description: "mettez le prénom puis votre NOM",
        },
        {
          label: "Titre",
          placeholder: "DRH chez Air France",
          model: "title",
          type: "text",
          description: "Votre titre, votre job",
        },
        {
          label: "Compétences",
          placeholder: "DEV, designer, VUEjs",
          model: "rawSkills",
          type: "text",
          description:
            "4 max, séparer par une virgule, exemple: dev, design, mec cool, démuni de cerveau",
        },
        {
          label: "Présentation",
          placeholder: "Ma vie, mon oeuvre...",
          model: "bio",
          type: "text",
          description: "Presentez vous en 168 caractères",
        },
        {
          label: "email",
          placeholder: "votre@email.com",
          model: "email",
          type: "email",
          description: "Votre email sera pubique",
        },
        {
          label: "Téléphone",
          placeholder: "06 12 34 56 78",
          model: "phone",
          type: "number",
          description: "Votre téléphone sera pubique",
        },
      ],
      user: {
        lastName: "",
        firstName: "",
        bio: "",
        birthday: "",
        avatar: { url: "" },
        phone: "",
        skills: [],
        title: "",
        rawSkills: "",
        email: "",
      },
    };
  },
  computed: {
    rawSkills() {
      return this.user.rawSkills;
    },
  },
  watch: {
    rawSkills() {
      const skills = this.rawSkills.split(",");
      this.user.skills = skills;
    },
  },
  methods: {
    queryBuilder() {
      const input = () => {
        return {
          name: this.user.name,
          bio: this.user.bio,
          birthday: this.user.birthday,
          active: true,
          avatar: this.user.avatar.url,
          phone: this.user.phone,
          skills: this.user.skills,
          staff: false,
          title: this.user.title,
          email: this.user.email,
        };
      };

      return gql` 
        mutation(
        ) {
          __typename
          MemberCreate(
            input: input 
          ) {
            id
            name
            active
          }
      }
      `;
    },
    async mutateUser() {
      const cool = () => `
        mutation MyMutation {
          __typename
          MemberCreate(input: {
        email: ${this.user.email},
        phone: ${this.user.phone},
        avatar: ${this.user.avatar.url},
        bio: ${this.user.bio},
        name: ${this.user.name},
        skills: ${this.user.skills},
        title: ${this.user.title},
        birthday: "Thu Jan 14 2021 18:26:59 GMT+0100",
      }) {
            id
          }
        }
      `;
      const XX = gql(`${cool}`);

      const res = await this.$graphql.request(XX);
      console.log(res);
    },
  },
};
</script>
