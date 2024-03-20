<template>
    <div>
        GROUP
    </div>
</template>

<script>
import GroupRoom from './GroupRoom.vue'

// 컴포넌트 불러오기
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
    methods: {
        getRoomList() {

        }
    }
}
</script>