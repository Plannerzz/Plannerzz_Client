<template>
    <div>
        ChatRoom {{ $route.params.id }}
        <!-- <ul id="messages"></ul>
        <form id="form" action=""><input id="input" autocomplete="off" /><button>Send</button></form> -->
        <div class="chat-container">
            <div class="chat-messages" ref="chatContainer">
                <div v-for="(msg, index) in msgList" :key="index">
                    <div class="message">{{ msg.beforeMsg }}</div>
                </div>
            </div>
            <textarea style="resize: none" v-model="message" placeholder="메시지 입력" />
            <button v-on:click="sendMessage()">전송</button>
        </div>
    </div>
</template>

<script>
import { watchEffect } from "vue";
import io from 'socket.io-client'

const socket = io('http://localhost:3000/chat')

export default {
    name: 'ChatRoom',
    data: () => {
        return {
            username: "username",
            msgList: [],
            message: '',
            chatContainer: null,
        };
    },
    created() {
        socket.emit('user-join', this.$route.params.id)

        watchEffect(() => {
            this.scrollChatToBottom()
        })
    },
    mounted() {
        socket.on("messages", (msg) => {
            // console.log('server 전송 : ' + msg)
            const chat = {
                // owner: id.value,
                beforeMsg: msg
            }
            this.msgList.push(chat)
        });
    },
    methods: {
        sendMessage() {
            socket.emit('chat-msg', this.message, this.$route.params.id)
            this.message = "";

            // 스크롤을 새 메시지 아래로 이동시킵니다.
            this.scrollChatToBottom();
        },
        scrollChatToBottom() {
            if (this.chatContainer) {
                this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
            }
        }
    },
}
</script>

<style></style>