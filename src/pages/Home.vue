<template>
  <div class="home">
    <h1>Top Users</h1>
    <div class="list" v-if="getUserListFiltered.length > 0">
      <list-item v-for="user in getUserListFiltered" :user="user" :key="user.id" />
    </div>
    <div class="empty" v-else>
      <h2>No user has been found</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import { mapGetters } from "vuex";
import ListItem from "@/components/ListItem.vue";

@Component({
  name: "Home",
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters(["getUserList", "getUserListFiltered"])
  },
})
export default class Home extends Vue {
  getUserListFiltered: any;
}
</script>

<style lang="scss" scoped>
.home {
  margin: 50px 0;
}
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 30px;
}
.empty {
  margin-top: 50px;
}
</style>
