<template>
    <div>
        <h2>
            {{ roomData.roomname }}
        </h2>
        <button v-on:click="enterChatRoom()">채팅 입장</button>
    </div>
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
            this.$router.push({ name: 'groupchat', params: { id: this.roomData.id } })
        }
    }
}
</script>


<style scoped>
h2 {
    border-color: black;
}
</style>