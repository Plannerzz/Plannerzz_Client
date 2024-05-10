import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Login",
        path: "/",
        component: () => import("../views/LoginView.vue"),
    },
    {
        name: "Register",
        path: "/register",
        component: () => import("../views/RegisterView.vue"),
    },
    {
        name: "FindId",
        path: "/findid",
        component: () => import("../views/FindIdView.vue"),
    },
    {
        name: "FindPw",
        path: "/findpw",
        component: () => import("../views/FindPwView.vue"),
    },
    {
        path: "/notfound",
        name: "NotFound",
        component: () => import("../views/NotFound.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/notfound"
    },
    {
        path: "/plannerz",
        component: () => import('../views/MainView.vue'),
        props: true,
        children: [
            {
                name: "Home",
                path: '/plannerz/home',
                component: () => import('../components/Home/HomeMenu.vue'),
            },
            {
                name: "Group",
                path: '/plannerz/group',
                component: () => import('../components/Group/GroupMenu.vue'),
            },
            {
                name: "NewGroup",
                path: '/plannerz/group/new',
                component: () => import('../components/Group/CreateGroup.vue')
            },
            {
                name: 'groupchat',
                path: '/plannerz/group/chat/:id',
                component: () => import('../components/Group/ChatRoom.vue'),
                props: true
            },
            {
                name: 'MyPage',
                path: '/plannerz/mypage',
                component: () => import('../components/MyPage/MyPageMenu.vue'),
                props: true
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
