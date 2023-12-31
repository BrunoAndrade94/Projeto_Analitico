import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/login",
			name: "Login",
			component: () => import("../views/LoginView.vue"),
		},
		{
			path: "/home",
			name: "Home",
			component: () => import("../views/HomeView.vue"),
		},
	],
});

export default router;
