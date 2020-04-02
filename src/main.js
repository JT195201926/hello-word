import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css"
import "./common/css/reset.css"
import "./assets/iconfont/iconfont.css"
import { Button ,Tag,Swipe, SwipeItem,Lazyload,Search} from 'vant'
Vue.use(Button);
Vue.use(Tag);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Search);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
