<template>
    <div class="top_bar">
        <a href="#" title="뒤로가기" class="left" v-on:click="$router.go(-1)">
            <img src="../assets/img/ico_leftarrow.svg" alt="뒤로가기">
        </a>
        <h4 class="page_title">{{ topTitle }}</h4>
        <img src="../assets/img/ico_search.svg" alt="검색 아이콘">
    </div>
</template>

<script>

export default {
    props: {
        topTitle: String
    }
}
</script>

<style>
@import url('../assets/css/layout.css');
</style>