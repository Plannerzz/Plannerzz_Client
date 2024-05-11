<template>
    <!-- <p>{{ roomList }}</p> -->
    <div class="page-wrap">
        <div class="weeklyPlan">
            <div class="plannerList" style="height: 80vh;">
                <ul class="listWrap">
                    <GroupRoom v-for="(room, i) in roomList" v-bind:key="i" v-bind:roomData="roomList[i]"></GroupRoom>
                </ul>
            </div>
        </div>
        <button class="purpleBtn" v-on:click="moveCreateRoom()">그룹 생성</button>
    </div>
</template>

<script>
import GroupRoom from './GroupRoom.vue'

export default {
    name: 'GroupMenu',
    components: {
        GroupRoom
    },
    data: () => {
        return {
            roomList: []
        }
    },
    created() {
        this.getRoomList()
    },
    methods: {
        //톡방 데이터 불러오기
        async getRoomList() {
            let result = await this.$api('http://localhost:8000/api/studygroup', 'get')
            this.roomList = result.data
        },
        moveCreateRoom() {
            this.$router.push('/plannerz/group/new')
        }
    }
}
</script>

<style>
@import url('../../assets/css/a.css');
@import url('../../assets/css/layout.css');
@import url('../../assets/css/styles.css');
</style>