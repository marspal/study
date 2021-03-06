import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mui from "@/components";
import "./mock ";
// 引入generic 中的normalize css
import "normalize.css/normalize.css";
import "@/style/index.scss";

createApp(App).use(store).use(router).use(Mui).mount("#app");
