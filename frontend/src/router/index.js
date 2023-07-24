import { createRouter, createWebHistory } from "vue-router";

// import Login from "../components/Login.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/login",
			name: "login",
			component: () => import("../views/LoginView.vue"),
		},
	],
});

export default router;
