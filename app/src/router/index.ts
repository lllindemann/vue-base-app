import { createRouter, createWebHistory } from "vue-router";

//Create Routes by the Vues stored in PAGES
import routes from "~pages";
import notFound from "@/pages/notfound.vue";

routes.push({
	path: "/:catchAll(.*)",
	name: "notfound",
	component: notFound,
});

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;


