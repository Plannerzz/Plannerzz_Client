<template>
    <div>
        ChatRoom {{ $route.params.id }}
        <!-- <ul id="messages"></ul>
        <form id="form" action=""><input id="input" autocomplete="off" /><button>Send</button></form> -->
        <div class="chat-container">
            <div class="chat-messages">
                <div v-for="(msg, index) in msgList" :key="index">
                    <div :class="{ 'my-chat': msg.userNo == userid, 'their-chat': msg.userNo != userid }" class="message">
                        {{ msg.userName }}<br>
                        {{ msg.comment }}</div>
                </div>
            </div>
            <textarea style="resize: none" v-model="message" placeholder="메시지 입력" />
            <button class="purpleBtn" v-on:click="sendMessage()">전송</button>
        </div>
    </div>
</template>

<script>
import { watchEffect } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import io from 'socket.io-client'

const socket = io('http://localhost:3000/chat')

export default {
    name: 'ChatRoom',
    data: () => {
        return {
            userid: 0,
            username: '',
            chatid: 0,
            msgList: [],
            message: '',
            chatContainer: null,
        };
    },
    created() {
        this.userid = computed(() => this.$store.state.userid)
        this.username = computed(() => this.$store.state.username)
        this.chatid = this.$route.params.roomid
        // console.log(this.$route.params.roomid)
        socket.on('logdata' + this.userid, (logs) => {
            // console.log(logs)
            this.msgList.push(...(JSON.parse(logs)))
        })
        socket.emit('user-join', this.userid, this.chatid)

        watchEffect(() => {
            this.scrollChatToBottom()
        })
    },
    mounted() {
        socket.on("messages", (msg) => {
            // console.log('server 전송 : ' + msg)
            const chat = JSON.parse(msg)
            this.msgList.push(chat)
        });
    },
    methods: {
        sendMessage() {
            //소켓 서버에 데이터 전송
            socket.emit('chat-msg', this.message, this.userid, this.username, this.chatid)
            this.message = "";
            this.scrollChatToBottom();
        },

        // 스크롤을 새 메시지 아래로 이동시킵니다.
        scrollChatToBottom() {
            if (this.chatContainer) {
                this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
            }
        }
    },
}
</script>

<style>
.chat-container {
    border: 1px solid cornflowerblue;
    display: flex;
    flex-direction: column;
    height: 80vh;
    padding: 20px;
}

.chat-messages {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.my-chat {
    float: right;
    background-color: #0084ff;
    color: #fff;
    max-width: 70%;
    padding: 8px;
    margin: 8px 8px 8px 0;
    border-radius: 6px;
    text-align: right;
    position: relative;
}

.their-chat {
    float: left;
    background-color: #f0f0f0;
    max-width: 70%;
    padding: 8px;
    margin: 8px 0;
    border-radius: 6px;
    text-align: left;
    color: #282828;
    position: relative;
}

.chat-input {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

input[type="text"] {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}
</style>