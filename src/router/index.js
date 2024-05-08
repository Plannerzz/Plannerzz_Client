import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Login",
        path: "/",
        component: () => import("../views/LoginView.vue"),
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
        name: "Home",
        path: "/plannerz",
        component: () => import('../views/MainView.vue'),
        children: [
            {
                path: '/plannerz/home',
                component: () => import('../components/Home/HomeMenu.vue')
            },
            {
                path: '/plannerz/group',
                component: () => import('../components/Group/GroupMenu.vue'),
            },
            {
                path: '/plannerz/group/new',
                component: () => import('../components/Group/CreateGroup.vue')
            },
            {
                name: 'groupchat',
                path: '/plannerz/group/chat/:id',
                component: () => import('../components/Group/ChatRoom.vue'),
                props: true
            }
        ]
    },
    // {
    //     name: "SignUp",
    //     path: "/plannerz/signup",
    //     component: () => import("../views/SignUpView.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
