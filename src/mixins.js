//GET, DELETE를 위한
//믹스인 클래스 클래스 생성

import axios from "axios";

export default {
    methods: {
        async $api(url, method, data) {
            return (
                await axios({
                    method: method,
                    url,
                    data,
                }).catch((e) => {
                    console.log(e);
                })
            ).data;
        },
    },
};