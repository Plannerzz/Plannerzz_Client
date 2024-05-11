<template>
    <div class="nav">
        <div v-on:click="checkHome()" title="홈" v-bind:class="homeActive">
            <i><img src="../assets/img/ico_menu01.svg" alt="홈 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu01_on.svg" alt="홈 아이콘"></i>
            <span>HOME</span>
        </div>
        <div v-on:click="checkGroup()" title="그룹" v-bind:class="groupActive">
            <i><img src="../assets/img/ico_menu02.svg" alt="그룹 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu02_on.svg" alt="그룹 아이콘"></i>
            <span>그룹</span>
        </div>
        <div v-on:click="checkSocial()" title="소셜" v-bind:class="socialActive">
            <i><img src="../assets/img/ico_menu03.svg" alt="소셜 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu03_on.svg" alt="소셜 아이콘"></i>
            <span>소셜</span>
        </div>
        <div v-on:click="checkCommunity()" title="커뮤니티" v-bind:class="communityActive">
            <i><img src="../assets/img/ico_menu04.svg" alt="커뮤니티 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu04_on.svg" alt="커뮤니티 아이콘"></i>
            <span>커뮤니티</span>
        </div>
        <div v-on:click="checkMyPage()" title="마이페이지" v-bind:class="myPageActive">
            <i><img src="../assets/img/ico_menu05.svg" alt="마이페이지 아이콘"></i>
            <i class="active"><img src="../assets/img/ico_menu05_on.svg" alt="마이페이지 아이콘"></i>
            <span>마이페이지</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            homeActive: '',
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
            this.$router.replace('/plannerz/home')
            this.$emit('input', '홈')
        },
        checkGroup() {
            this.homeActive = ''
            this.groupActive = 'on'
            this.socialActive = ''
            this.communityActive = ''
            this.myPageActive = ''
            this.$router.replace('/plannerz/group')
            this.$emit('input', '그룹')
        },
        checkSocial() {
            this.homeActive = ''
            this.groupActive = ''
            this.socialActive = 'on'
            this.communityActive = ''
            this.myPageActive = ''
            this.$emit('input', '친구')
        },
        checkCommunity() {
            this.homeActive = ''
            this.groupActive = ''
            this.socialActive = ''
            this.communityActive = 'on'
            this.myPageActive = ''
            this.$emit('input', '커뮤니티')
        },
        checkMyPage() {
            this.homeActive = ''
            this.groupActive = ''
            this.socialActive = ''
            this.communityActive = ''
            this.myPageActive = 'on'
            this.$router.replace('/plannerz/mypage')
            this.$emit('input', '마이페이지')
        }
    }
}
</script>

<style>
@import url('../assets/css/layout.css');
</style>