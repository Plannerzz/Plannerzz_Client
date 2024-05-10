<template>
    <div class="register-box">
        <h1>플래너즈에 오신 것을<br>환영합니다.</h1>
        <p class="lay">아래 항목들을 입력해주세요.</p>
        <div class="user-box">
            <h4>이름</h4>
            <input type="text" placeholder="이름 입력" v-model="userData.name">
        </div>
        <div class="user-box">
            <h4>아이디</h4>
            <input class="input2" type="text" placeholder="아이디 입력" v-model="userData.userid" @input="isChecked = false">
            <button class="mail" v-on:click="checkUser">중복확인</button>
        </div>
        <div class="user-box">
            <h4>비밀번호</h4>
            <input type="text" placeholder="비밀번호 입력" v-model="userData.userpw">
        </div>
        <div class="user-box">
            <h4>비밀번호 확인</h4>
            <input type="text" placeholder="비밀번호 확인" v-model="pwCheck">
        </div>
        <!-- <div class="user-box">
            <h4>이메일</h4>
            <input class="input3" type="text" placeholder="이메일 입력">
            <button class="mail">인증메일 전송</button>
        </div>
        <div class="user-box">
            <h4>이메일 인증</h4>
            <input type="text" placeholder="인증번호 입력">
        </div> -->
        <button class="register" v-on:click="addUser">회원가입</button>
    </div>

    <!-- S : POPUP -->
    <div id="popup">
        <div class="popwrap">
            <div class="modal-header clearfix">
                <p class="title"></p>
                <a href="javascript:void(0);" class="closeBtn" v-on:click="closePop()"></a>
            </div>
            <div class="modal-body">
                <p>{{ errorText }}</p>
            </div>
        </div>
    </div>
    <!-- E : POPUP-->
</template>

<script>
import $ from 'jquery';
export default {
    mounted() {
        this.closePop()
    },
    data() {
        return {
            userData: {
                id: 0,
                name: '',
                userid: '',
                userpw: ''
            },
            isChecked: false,
            pwCheck: '',
            errorText: ''
        }
    },
    methods: {
        async addUser() {
            if (this.userData.name == '') {
                this.errorText = '이름을 입력해주세요'
                this.openPop()
                return
            }
            if (this.userData.userid == '') {
                this.errorText = '아이디를 입력해주세요'
                this.openPop()
                return
            }
            if (!this.isChecked) {
                this.errorText = '아이디 중복체크를 해주세요'
                this.openPop()
                return
            }

            if (this.userData.userpw == '') {
                this.errorText = '비밀번호를 입력해주세요'
                this.openPop()
                return
            }
            if (this.userData.userpw != this.pwCheck) {
                this.errorText = '비밀번호를 다시 확인해주세요'
                this.openPop()
                return
            }

            let result = await this.$api('http://localhost:8000/api/user', 'post', this.userData)
            let resultData = result.data

            if (resultData.message != undefined) {
                this.errorText = resultData.message
                this.openPop()
                return
            }
            else {
                this.errorText = '회원가입이 완료되었습니다!'
                this.openPop()
                this.$router.go(-1)
                return
            }
        },
        async checkUser() {
            let result = await this.$api('http://localhost:8000/api/user/check?userid=' + this.userData.userid, 'get')
            let resultData = result.data

            if (resultData.message != undefined) {
                this.errorText = '아이디가 중복되었습니다.'
                this.openPop()
                return
            }

            this.errorText = '사용 가능한 아이디입니다'
            this.openPop()
            this.isChecked = true
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