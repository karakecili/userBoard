<template>
    <div class="profile">
        <img class="profile-img" :src="profile.avatar_url" :alt="profile.login">
        <span class="profile-text">{{profile.login}} <b v-if="profile.name != ''">({{profile.name}})</b></span>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";

@Component({
    name: "Detail",
    props: {
        profile: Object,
    },
})
export default class Profile extends Vue {
    profile: any;
}
</script>

<style lang="scss" scoped>

    .profile {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        margin-top: 50px;

        &-text {
            font-size: 40px;
        }

        &-img {
            width: 300px;
            height: 300px;
            border-radius: 100%;
        }
    }
</style>