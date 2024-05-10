<template>
    <div class="page-wrap">
        <!-- S : 상단바 -->
        <div class="top_bar">
            <a href="main.html" title="뒤로가기" class="left">
                <img src="./img/ico_leftarrow.svg" alt="왼쪽 화살표 이미지">
            </a>
            <h4 class="page_title">플래너 작성</h4>
        </div>
        <!-- E : 상단바 -->

        <!-- S : 컨텐츠 영역 -->
        <div class="container writePlanner">
            <div class="input-form">
                <label for="pickDate">DATE</label>
                <span>
                    <em>날짜선택</em>
                    <input type="date" id="pickDate">
                </span>
            </div>
            <div class="input-form clearfix">
                <label for="setDay">D-Day</label>
                <a href="javascript:void(0);" class="reset">X</a>
                <div class="f_r">
                    <input type="number" id="setDay">
                    <em>일</em>
                </div>
            </div>
            <div class="input-form clearfix">
                <label for="goal">GOAL</label>
                <a href="javascript:void(0);" class="reset">X</a>
                <div class="f_r w100">
                    <input type="text" id="goal" class="w100" placeholder="목표를 입력해주세요.">
                </div>
            </div>
            <div class="input-form">
                <label>CHECK LIST</label>
                <a href="#" class="addList">리스트 추가</a>
                <ul class="ch_list">
                    <li>
                        <input type="text" class="chList" value="서적 120p 읽기">
                        <a href="javascript:void(0);" class="delBtn"></a>
                    </li>
                    <li>
                        <input type="text" class="chList" placeholder="리스트 입력">
                        <a href="javascript:void(0);" class="delBtn"></a>
                    </li>
                    <li>
                        <input type="text" class="chList" placeholder="리스트 입력">
                        <a href="javascript:void(0);" class="delBtn"></a>
                    </li>
                    <li>
                        <input type="text" class="chList" placeholder="리스트 입력">
                        <a href="javascript:void(0);" class="delBtn"></a>
                    </li>
                    <li>
                        <input type="text" class="chList" placeholder="리스트 입력">
                        <a href="javascript:void(0);" class="delBtn"></a>
                    </li>
                </ul>
            </div>
            <div class="input-form clearfix">
                <label for="memo">MEMO</label>
                <a href="javascript:void(0);" class="reset">X</a>
                <div class="f_r w100">
                    <input type="text" id="memo" class="w100 t_left" placeholder="메모를 작성해주세요.">
                </div>
            </div>
            <div class="btn w100">
                <button class="purpleBtn">플래너 등록</button>
            </div>
        </div>
        <!-- E : 컨텐츠 영역 -->

        <!-- S : 하단 메뉴 -->
        <div class="nav">
            <a href="#" title="홈" class="on">
                <i><img src="./img/ico_menu01.svg" alt="홈 아이콘"></i>
                <i class="active"><img src="./img/ico_menu01_on.svg" alt="홈 아이콘"></i>
                <span>HOME</span>
            </a>
            <a href="#" title="그룹">
                <i><img src="./img/ico_menu02.svg" alt="그룹 아이콘"></i>
                <i class="active"><img src="./img/ico_menu02_on.svg" alt="그룹 아이콘"></i>
                <span>그룹</span>
            </a>
            <a href="#" title="소셜">
                <i><img src="./img/ico_menu03.svg" alt="소셜 아이콘"></i>
                <i class="active"><img src="./img/ico_menu03_onsvg" alt="소셜 아이콘"></i>
                <span>소셜</span>
            </a>
            <a href="#" title="커뮤니티">
                <i><img src="./img/ico_menu04.svg" alt="커뮤니티 아이콘"></i>
                <i class="active"><img src="./img/ico_menu04_on.svg" alt="커뮤니티 아이콘"></i>
                <span>커뮤니티</span>
            </a>
            <a href="#" title="마이페이지">
                <i><img src="./img/ico_menu05.svg" alt="마이페이지 아이콘"></i>
                <i class="active"><img src="./img/ico_menu05_on.svg" alt="마이페이지 아이콘"></i>
                <span>마이페이지</span>
            </a>
        </div>
        <!-- E : 하단 메뉴 -->

    </div>
    <div class="popup">
        <div class="modal-header"></div>
        <div class="modal-body"></div>
        <div class="modal-footer">
            <div class="buttons">

            </div>
        </div>
    </div>
</template>

<style></style>