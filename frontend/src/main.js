import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Meus Imports \/
import PrimeVue from "primevue/config";

// Componentes \/
import { InputText, Button } from "./config/primevue/components.js";

// Temas \/
import "./config/primevue/themes.js";

// Create App \/
const app = createApp(App);

// App Use \/
app.use(createPinia());
app.use(router);

// Meus App Use \/
app.use(PrimeVue);

// Meus App Use e Components \/
app.component("InputText", InputText);
app.component("Button", Button);

// App Mount \/
app.mount("#app");
