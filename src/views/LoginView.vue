<template>
    <div class="login-box">
        <h1>플래너즈</h1>
        <div class="user-box">
            <h4>아이디</h4>
            <input type="text" placeholder="아이디 입력" v-model="userid">
        </div>
        <div class="user-box">
            <h4>비밀번호</h4>
            <input type="password" placeholder="비밀번호 입력" v-model="userpw">
        </div>
        <button class="login" v-on:click="checkUser()">로그인</button>
        <div class="idpw_box">
            <div class="idpw_list">
                <router-link to="/findid">아이디 찾기</router-link>
            </div>
            <div class="vertical_line"></div>
            <div class="idpw_list">
                <router-link to="/findpw">비밀번호 찾기</router-link>
            </div>
        </div>
        <div class="info">플래너즈 방문이 처음이신가요? <router-link to="/register">회원가입</router-link></div>
    </div>

    <!-- S : POPUP -->
    <div id="popup">
        <div class="popwrap">
            <div class="modal-header clearfix">
                <p class="title"></p>
                <a href="javascript:void(0);" class="closeBtn" v-on:click="closePop()"></a>
            </div>
            <div class="modal-body">
                <p> 아이디 또는 비밀번호를 확인해주세요.</p>
            </div>
        </div>
    </div>
    <!-- E : POPUP-->
</template>

<script>
import $ from 'jquery';

export default {
    mounted() {
        $('#popup').hide();
    },
    data() {
        return {
            userid: '',
            userpw: ''
        }
    },
    methods: {
        //로그인 확인
        async checkUser() {
            let result = await this.$api('http://localhost:8000/api/user/login', 'post', {
                userid: this.userid,
                userpw: this.userpw
            })
            let resultData = result.data

            if (resultData.message != undefined) {
                this.openPop()
                return
            }
            else {
                localStorage.setItem("userid", resultData.id);
                this.$router.push('/plannerz/home')
            }
        },
        openPop() {
            $('#popup').show();
        },
        closePop() {
            $('#popup').hide();
        }
    },
}
</script>

<style>
@import url('../assets/css/a.css');
</style>