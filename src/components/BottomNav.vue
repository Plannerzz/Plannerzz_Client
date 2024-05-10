<template>
    <div class="nav">
        <router-link to="/plannerz/home" replace title="홈" v-on:click="checkHome()" v-bind:class="homeActive">
            <i><img src="../assets/img/ico_menu01.svg" alt="홈 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu01_on.svg" alt="홈 아이콘"></i>
            <span>HOME</span>
        </router-link>
        <router-link to="/plannerz/group" replace title="그룹" v-on:click="checkGroup()" v-bind:class="groupActive">
            <i><img src="../assets/img/ico_menu02.svg" alt="그룹 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu02_on.svg" alt="그룹 아이콘"></i>
            <span>그룹</span>
        </router-link>
        <router-link to="#" replace title="소셜" v-on:click="checkSocial()" v-bind:class="socialActive">
            <i><img src="../assets/img/ico_menu03.svg" alt="소셜 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu03_on.svg" alt="소셜 아이콘"></i>
            <span>소셜</span>
        </router-link>
        <router-link to="#" replace title="커뮤니티" v-on:click="checkCommunity()" v-bind:class="communityActive">
            <i><img src="../assets/img/ico_menu04.svg" alt="커뮤니티 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu04_on.svg" alt="커뮤니티 아이콘"></i>
            <span>커뮤니티</span>
        </router-link>
        <router-link to="/plannerz/mypage" replace title="마이페이지" v-on:click="checkMyPage()" v-bind:class="myPageActive">
            <i><img src="../assets/img/ico_menu05.svg" alt="마이페이지 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu05_on.svg" alt="마이페이지 아이콘"></i>
            <span>마이페이지</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            homeActive: 'on',
            groupActive: '',
            socialActive: '',
            communityActive: '',
            myPageActive: '',
        }
    },
    methods: {
        checkHome() {
            this.homeActive = 'on'
            this.groupActive = ''
            this.socialActive = ''
            this.communityActive = ''
            this.myPageActive = ''
        },
        checkGroup() {
            this.homeActive = ''
            this.groupActive = 'on'
            this.socialActive = ''
            this.communityActive = ''
            this.myPageActive = ''
        },
        checkSocial() {
            this.homeActive = ''
            this.groupActive = ''
            this.socialActive = 'on'
            this.communityActive = ''
            this.myPageActive = ''
        },
        checkCommunity() {
            this.homeActive = ''
            this.groupActive = ''
            this.socialActive = ''
            this.communityActive = 'on'
            this.myPageActive = ''
        },
        checkMyPage() {
            this.homeActive = ''
            this.groupActive = ''
            this.socialActive = ''
            this.communityActive = ''
            this.myPageActive = 'on'
        }
    }
}
</script>

<style>
@import url('../assets/css/layout.css');
</style>