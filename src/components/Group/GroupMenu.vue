<template>
    <!-- <p>{{ roomList }}</p> -->
    <GroupRoom v-for="(room, i) in roomList" v-bind:key="i" v-bind:roomData="roomList[i]"></GroupRoom>
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
            this.roomList = await this.$api('http://localhost:8000/api/studygroup', 'get')
        }
    }
}
</script>