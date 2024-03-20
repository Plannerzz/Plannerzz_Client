<template>
    <div>
        <h2> {{ roomname }} </h2>
    </div>
</template>

<script>
export default {
    name: 'GroupRoom',
    props: {
        roomname: String
    }
}
</script>


<style scoped>
h2 {
    border-color: black;
}
</style>