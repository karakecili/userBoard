<template>
    <div class="container">
        <div class="container-inner">

            <Header />
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Component({
    name: "MainLayout",
    components: { Footer, Header }
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped>
    .container {
        background: #F6F9FF;

        &-inner {
            display: flex;
            flex-direction: column;
            width: 1024px;
            background-color: #fff;
            margin: 0 auto;
            min-height: 100vh;
        }
    }
</style>