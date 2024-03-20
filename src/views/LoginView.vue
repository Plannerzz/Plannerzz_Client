<template>
    <div class="login-box">
        <h1>플래너즈</h1>
        <form>
            <div class="user-box">
                <h4>아이디</h4>
                <input type="text" placeholder="아이디 입력">
            </div>
            <div class="user-box">
                <h4>비밀번호</h4>
                <input type="password" placeholder="비밀번호 입력">
            </div>
            <button class="login">로그인</button>
        </form>
        <div class="idpw_box">
            <div class="idpw_list">
                <a href="/idfind_page.html">
                    아이디 찾기
                </a>
            </div>
            <div class="vertical_line"></div>
            <div class="idpw_list">
                <a href="/pwfind_page.html">
                    비밀번호 찾기
                </a>
            </div>
        </div>
        <div class="info">플래너즈 방문이 처음이신가요? <a href="/register_page.html">회원가입</a></div>
    </div>
</template>

<script>

</script>

<style>
@import url('../assets/css/a.css');
</style>