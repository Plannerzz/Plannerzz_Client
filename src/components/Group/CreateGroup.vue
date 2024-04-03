<template>
    <div>
        <form v-on:submit="createNewGroup">
            그룹명 : <input id="roomname" type="text" v-model="roomData.roomname"> <br>
            그룹 설명 : <textarea id="comment" v-model="roomData.comment"></textarea> <br>
            그룹 인원 : <input type="number" id="numLimit" min="2" max="5" v-model="roomData.numLimit"> <br>
            채팅 시작 시간 : <input type="time" id="startTime" v-model="roomData.startTime"> <br>
            채팅 종료 시간 : <input type="time" id="endTime" v-model="roomData.endTime"> <br>
            <button type="submit">생성</button>
        </form>

    </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter()

export default {
    name: 'CreateGroup',
    data: () => {
        return {
            roomData: {
                id: 0,
                roomname: '',
                comment: '',
                numLimit: 2,
                startTime: '14:00',
                endTime: '16:00',
            }
        }
    },
    methods: {
        // 톡방 데이터 저장
        createNewGroup(e) {
            e.preventDefault()

            if (this.roomData.roomname.trim() == '') {
                alert('그룹명을 작성해 주세요.')
                document.getElementById('roomname').focus()
                return
            }

            if (this.roomData.comment.trim() == '') {
                alert('그룹 설명을 작성해 주세요.')
                document.getElementById('comment').focus()
                return
            }

            if (this.roomData.startTime >= this.roomData.endTime) {
                alert('시작 시간이 종료 시간보다 빠를 수 없습니다.')
                return;
            }

            axios.post('http://localhost:8000/api/studygroup', this.roomData)
                .then((req, res) => {
                    alert('그룹 생성이 완료되었습니다!')

                    //생성된 그룹 화면으로 이동 (지금은 임시로 메인 화면으로 이동)
                    router.push('/plannerz/group')
                })
                .catch((e) => {
                    console.error(e)
                })
        }
    }
}
</script>

<style scoped>
textarea {
    resize: none;
    width: 200px;
    height: 200px;
}
</style>