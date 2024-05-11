<template>
    <div class="page-wrap myPage">
        <!-- S : 마이페이지 상단-->
        <div class="myInfo">
            <div class="thumb"></div>
            <div class="me">
                <p>{{ userName }}</p>
                <span class="text">데굴데굴 내인생</span>
            </div>
            <button class="purpleBtn">프로필 변경</button>
        </div>
        <!-- E : 마이페이지 상단-->
        <!-- S : 상단탭 -->
        <ul class="tab">
            <li class="on" data-tab="tab-1">전체</li>
            <li data-tab="tab-2">그룹<span class="count">6</span></li>
            <li data-tab="tab-3">개인<span class="count">12</span></li>
        </ul>
        <!-- E : 상단탭 -->

        <!-- S : 컨텐츠 영역 -->
        <div class="container">
            <!-- 상단에 탭이 있는 형태의 디자인 경우는 아래 tab-cont를 사용.-->
            <div class="tab-cont">
                <div id="tab-1" class="tab-content on">
                    <div class="dataList" v-on:click="moveDetail()">
                        <p>12월 24일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">2</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dataList">
                        <p>12월 23일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dataList">
                        <p>12월 22일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="tab-2" class="tab-content">
                    <div class="dataList">
                        <p>12월 24일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dataList">
                        <p>12월 23일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dataList">
                        <p>12월 22일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="tab-3" class="tab-content">
                    <div class="dataList">
                        <p>12월 24일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dataList">
                        <p>12월 23일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dataList">
                        <p>12월 22일, 2023년</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="img"></div>
                                    <div class="reaction">
                                        <span class="like">16</span>
                                        <span class="comment">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- E : 컨텐츠 영역 -->

    </div>
</template>

<script>
import $ from 'jquery';
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    data() {
        return {
            userName: String,
        }
    },
    mounted() {
        $(document).ready(function () {
            //탭 클릭시 내용 변경
            $('ul.tab li').click(function () {
                var tab_id = $(this).attr('data-tab');

                $('ul.tab li').removeClass('on');
                $('.tab-content').removeClass('on');

                $(this).addClass('on');
                $("#" + tab_id).addClass('on');
            });
        })
        this.userName = computed(() => useStore().state.username)
        console.log(this.userName)
    },
    methods: {
        moveDetail() {
            this.$router.push('/plannerz/mypage/detail')
        }
    },
}
</script>