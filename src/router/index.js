import { createRouter, createWebHistory } from "vue-router"
import Slide from "../pages/Slide.vue"
import MarkDown from "../pages/MarkDown.vue"
import Calendar from "../pages/Calendar.vue"
import ToDoList from "../pages/ToDoList.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Slide',
            component: Slide
        },
        {
            path: '/markdown',
            name: 'MarkDown',
            component: MarkDown
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: '/todolist',
            name: 'ToDoList',
            component: ToDoList
        },
    ],
})

export default router;