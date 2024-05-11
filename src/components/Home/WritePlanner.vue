<template>
    <div class="page-wrap">
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

    </div>
</template>

<style></style>