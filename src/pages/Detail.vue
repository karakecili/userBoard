<template>
    <div class="detail">
        <div class="backButton">
            <a href="/">
                <img src="@/assets/img/back.svg" alt="Home Page">
            </a>
        </div>
        <Profile :profile="getUserDetail" />
        <div class="repos">
            <div v-for="repos in getUserRepos" :key="repos.id">
                <Repos :repos="repos" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import { mapGetters } from "vuex";
import Repos from '@/components/Repos.vue';
import Profile from '@/components/Profile.vue';

@Component({
    name: "Detail",
    components: { Repos, Profile },
    computed: {
        ...mapGetters(["getUserDetail", "getUserRepos"])
    },
})
export default class Detail extends Vue {
    getUserDetail: any;
    getUserRepos: any;
}
</script>

<style lang="scss" scoped>
    .detail {
        display: flex;
        flex-direction: column;
    }

    .backButton {
        position: absolute;
        margin-left: 50px;
        margin-top: 50px;
    }

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

    .repos {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 50px auto;
        text-align: left;
        
        &-row {
            display: flex;
            flex-direction: row;
        }
        
        &-name {
            margin-right: auto; 
            width: 200px;
        }
        
        &-watcher {
            width: 50px;
        }
        
        &-star {
            width: 50px;
        }
    }
</style>