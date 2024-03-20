<template>
    <div class="page-wrap">
        <TopBar />
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
    }
}

</script>

<style>
@import url('../assets/css/layout.css');
</style>