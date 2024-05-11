<template>
    <div class="page-wrap">
        <TopBar v-bind:topTitle="title" />
        <router-view />
        <BottomNav :dataList="activeData" @input="updateData" />
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
    data() {
        return {
            title: '',
            activeData: {
                homeActive: '',
                groupActive: '',
                socialActive: '',
                communityActive: '',
                myPageActive: '',
            }
        }
    },
    methods: {
        updateData(title) {
            this.title = title
        }
    },
}

</script>

<style>
@import url('../assets/css/layout.css');
@import url('../assets/css/styles.css');
</style>