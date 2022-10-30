<template>
  <div class="header">
    <a href="/">
      <img src="@/assets/img/github.svg" alt="">
      <span>GitHub Userboard</span>
    </a>
    <input type="text" class="header-input" name="Search Input" id="searchInput" v-model="searchInput">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";

@Component({
  name: "Header",
})
export default class Header extends Vue {
  
    get searchInput() {
      return this.$store.state.userFilter
    }
    set searchInput(value) {
      this.$store.commit('updateUserFilter', value)
    }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: #000;
    color: #fff;
    padding: 20px 50px;
    display: flex;

    & > * {
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      gap: 3px;
      color: #fff;

      &:hover {
        color: #808080;
      }
    }

    a {
      text-decoration: none;
    }

    &-input {
      color: #000;
      margin-left: auto;
    }
  }
</style>