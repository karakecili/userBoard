<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import MainLayout from "./layout/Main.vue";

@Component({
  components: {
      MainLayout,
  },
})
export default class extends Vue {
  public async created(): Promise<void> {
    this.$store.dispatch("Init")
  }
}
</script>