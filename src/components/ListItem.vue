<template>
    <div class="user" :key="user.id" @click="selectUser(user.login)">
        <img class="user-img" :src="user.avatar_url" alt="">
        <span class="user-name">{{user.login}}</span>
        <a class="user-link" :href="user.html_url" target="_blank">github</a>
        <!-- {{ user }} -->
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";

@Component({
    name: "ListItem",
    props: {
        user: Object,
    },
})
export default class ListItem extends Vue {
    user: any;
    async selectUser(user_login: any): Promise<void> {
        await this.$store.dispatch("selectUser", user_login)
        this.$router.push("/detail/" + user_login)
    }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;
  align-content: center;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #adb8b9;
    border-radius: 20px;
  }

  &-img {
    width: 140px;
    height: 140px;
    border-radius: 100%;
  }

  &-name {
   font-size: 20px;
   font-weight: 800;
   line-height: 23px;
  }

  &-link {
   font-size: 14px;
  }
}
</style>
