<template>
    <div class="page-wrap mainPage">
        <!-- S : 나의 플래너 달성률 -->
        <div class="myProgress">
            <div class="profile">
                <span class="image"></span>
                <span class="userinfo">
                    <span class="name">{{ userData.name }}</span>
                    <span class="message">데굴데굴 내인생</span>
                </span>
                <button class="writeBtn" aria-lable="플래너 작성하기" v-on:click="openPop()"></button>
            </div>
            <div class="progress">
                <div class="title cont-tit">
                    <h5>나의 플래너 달성률</h5>
                    <span class="percent">50%</span>
                </div>
                <div class="bar">
                    <span class="gauge"></span>
                </div>
            </div>
        </div>
        <!-- E : 나의 플래너 달성률-->
        <!-- S : 내 친구 달성률 -->
        <div class="frProgress">
            <div class="title cont-tit">
                <h5>내 친구 달성률</h5>
                <a href="#" class="more">더보기</a>
            </div>
            <ul class="frList">
                <li>
                    <span class="progressBar"></span>
                    <span class="name">안도현</span>
                    <span class="percent">85%</span>
                </li>
                <li>
                    <span class="progressBar"></span>
                    <span class="name">조효린</span>
                    <span class="percent">20%</span>
                </li>
                <li>
                    <span class="progressBar"></span>
                    <span class="name">황우석</span>
                    <span class="percent">30%</span>
                </li>
                <li>
                    <span class="progressBar"></span>
                    <span class="name">김길규</span>
                    <span class="percent">45%</span>
                </li>
            </ul>
        </div>
        <!-- E : 내 친구 달성률 -->
        <!-- S : 나의 주간 플래너 -->
        <div class="weeklyPlan">
            <div class="title cont-tit">
                <h5>내 그룹</h5>
            </div>
            <!-- 캘린더 비활성화 -->
            <!-- <ul class="dayList">
                <li class="on">
                    <span class="day">MON</span>
                    <span class="date">01</span>
                </li>
                <li>
                    <span class="day">TUE</span>
                    <span class="date">02</span>
                </li>
                <li>
                    <span class="day">WED</span>
                    <span class="date">03</span>
                </li>
                <li>
                    <span class="day">THU</span>
                    <span class="date">04</span>
                </li>
                <li>
                    <span class="day">FRI</span>
                    <span class="date">05</span>
                </li>
                <li>
                    <span class="day">SAT</span>
                    <span class="date">06</span>
                </li>
                <li>
                    <span class="day">SUN</span>
                    <span class="date">07</span>
                </li>
            </ul> -->
            <div class="plannerList">
                <ul class="listWrap">
                    <li>
                        <a href="#">
                            <span class="tit">
                                <span class="gubun group">그룹</span>
                                <span class="text">갈기갈기 찢어주마 토익</span>
                            </span>
                            <span class="alignRight">
                                <span class="check">
                                    <em class="done">12</em> / <em class="total">15</em>
                                </span>
                                <span>
                                    달성률<em class="per">80%</em>
                                </span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="tit">
                                <span class="gubun group">그룹</span>
                                <span class="text">갈기갈기 찢어주마 토익</span>
                            </span>
                            <span class="alignRight">
                                <span class="check">
                                    <em class="done">12</em> / <em class="total">15</em>
                                </span>
                                <span>
                                    달성률<em class="per">80%</em>
                                </span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="tit">
                                <span class="gubun solo">개인</span>
                                <span class="text">갈기갈기 찢어주마 토익</span>
                            </span>
                            <span class="alignRight">
                                <span class="check">
                                    <em class="done">12</em> / <em class="total">15</em>
                                </span>
                                <span>
                                    달성률<em class="per">80%</em>
                                </span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="tit">
                                <span class="gubun group">그룹</span>
                                <span class="text">갈기갈기 찢어주마 토익</span>
                            </span>
                            <span class="alignRight">
                                <span class="check">
                                    <em class="done">12</em> / <em class="total">15</em>
                                </span>
                                <span>
                                    달성률<em class="per">80%</em>
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- E : 하단 메뉴 -->
        <!-- S : POPUP -->
        <div id="popup">
            <div class="popwrap">
                <div class="modal-header clearfix">
                    <p class="title"></p>
                    <a href="javascript:void(0);" class="closeBtn" v-on:click="closePop()"></a>
                </div>
                <div class="modal-body">
                    <p> 반가워요!<br>
                        플래너 작성 방식을 선택하세요.</p>
                </div>
                <div class="modal-footer">
                    <div class="buttons">
                        <button class="purpleBtn">그룹플래너</button>
                        <button class="orangeBtn">개인플래너</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- E : POPUP-->
    </div>
</template>


<script>
import $ from 'jquery';

export default {
    data() {
        return {
            userData: Object
        }
    },
    async mounted() {
        console.log(localStorage.getItem("userid"))
        let res = await this.$api('http://localhost:8000/api/user?id=' + localStorage.getItem("userid"), "get")
        this.userData = res.data
        $('#popup').hide();
    },
    methods: {
        openPop() {
            $('#popup').show();
        },
        closePop() {
            $('#popup').hide();
        }
    }
}
</script>

<style>
@import url('../../assets/css/layout.css');
@import url('../../assets/css/styles.css');
</style>