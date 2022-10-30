<template>
    <div class="footer">
        <a target="_blank" href="https://github.com">
            <img src="@/assets/img/github.svg" alt="">
        </a>
        <span class="footer-span">© All rights reserved, 2022</span>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";

@Component({
    name: "Footer",
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
    .footer {
        background-color: #000;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 30px;
        margin-top: auto;

        &-span {
            font-size: 10px;
            line-height: 12px;
            margin-top: 20px;
        }
    }
</style>