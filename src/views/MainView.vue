<template>
    <div class="page-wrap">
        <TopBar v-bind:topTitle="title" />
        <router-view />
        <BottomNav />
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import BottomNav from '@/components/BottomNav.vue';

export default {
    components: {
        TopBar,
        BottomNav
    },
    props: {
        title: String
    }
}

</script>

<style>
@import url('../assets/css/layout.css');
</style>