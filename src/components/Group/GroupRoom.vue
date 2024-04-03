<template>
    <div>
        <h2 v-on:click="showDetail">
            {{ roomData.roomname }}
        </h2>
    </div>
</template>

<script>
export default {
    name: 'GroupRoom',
    props: {
        roomData: Object
    },
    methods: {
        showDetail() {
            console.log(this.roomData.id)

        }
    }
}
</script>


<style scoped>
h2 {
    border-color: black;
}
</style>