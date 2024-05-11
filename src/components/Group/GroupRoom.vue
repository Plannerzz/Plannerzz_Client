<template>
    <li>
        <span class="tit">
            <h2 class="group">{{ roomData.roomname }}</h2>
        </span>
        <div class="alignRight">
            <button style="width: 50%; visibility: hidden;"></button>
            <button class="orangeBtn" style="width: 50%;" v-on:click="enterChatRoom()">채팅 입장</button>
        </div>
    </li>
</template>

<script>
export default {
    name: 'GroupRoom',
    props: {
        roomData: Object
    },
    methods: {
        // 선택한 그룹의 채팅방으로 이동
        enterChatRoom() {
            // console.log(roomData)
            this.$router.push({ name: 'groupchat', params: { roomid: this.roomData.id } })
        }
    }
}
</script>

<style>
@import url('../../assets/css/a.css');
@import url('../../assets/css/layout.css');
@import url('../../assets/css/styles.css');
</style>