<template>
    <div class="register-box">
        <h1>그룹 생성</h1>
        <p class="lay">아래 항목들을 입력해주세요.</p>
        <br>
        <div class="user-box">
            <h4>그룹명</h4>
            <input type="text" v-model="roomData.roomname">
        </div>
        <div class="user-box">
            <h4>그룹 설명</h4>
            <input type="text" id="comment" v-model="roomData.comment">
        </div>
        <div class="user-box">
            <h4>그룹 인원</h4>
            <input type="number" id="numLimit" min="2" max="5" v-model="roomData.numLimit">
        </div>
        <div class="user-box">
            <h4>채팅 시작 시간</h4>
            <input type="time" id="startTime" v-model="roomData.startTime">
        </div>
        <div class="user-box">
            <h4>채팅 종료 시간</h4>
            <input type="time" id="endTime" v-model="roomData.endTime">
        </div>
        <button class="register" v-on:click="createNewGroup()">그룹생성</button>
    </div>

    <!-- S : POPUP -->
    <div id="popup">
        <div class="popwrap">
            <div class="modal-header clearfix">
                <p class="title"></p>
                <a href="javascript:void(0);" class="closeBtn" v-on:click="closePop()"></a>
            </div>
            <div class="modal-body">
                <p>{{ popText }}</p>
            </div>
        </div>
    </div>
    <!-- E : POPUP-->
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

let today = new Date()

export default {
    name: 'CreateGroup',
    data: () => {
        return {
            roomData: {
                id: 0,
                roomname: '',
                comment: '',
                numLimit: 2,
                startTime: today.getHours() + ':' + today.getMinutes(),
                endTime: (today.getHours() + 2) + ':' + today.getMinutes(),
            },
            popText: '',
            isRegister: false
        }
    },
    mounted() {
        this.closePop()
    },
    methods: {
        // 톡방 데이터 저장
        createNewGroup() {
            if (this.roomData.roomname.trim() == '') {
                this.popText = '그룹명을 작성해 주세요.'
                $('#popup').show();
                return
            }

            if (this.roomData.comment.trim() == '') {
                this.popText = '그룹 설명을 작성해 주세요.'
                $('#popup').show();
                return
            }

            if (this.roomData.startTime >= this.roomData.endTime) {
                this.popText = '시작 시간이 종료 시간보다 빠를 수 없습니다.'
                $('#popup').show();
                return;
            }

            axios.post('http://localhost:8000/api/studygroup', this.roomData)
                .then((req, res) => {
                    this.popText = '그룹이 생성되었습니다!'
                    this.isRegister = true
                    $('#popup').show();
                })
                .catch((e) => {
                    console.error(e)
                })
        },
        closePop() {
            $('#popup').hide();
            if (this.isRegister)
                this.$router.push('/plannerz/group')
        }
    }
}
</script>