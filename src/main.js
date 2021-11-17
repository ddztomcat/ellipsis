import Vue from 'vue'
import App from './App.vue'
import CodeView from "vue-code-view/lib/vue-code-viewer.common";

import "vue-code-view/lib/vue-code-viewer.css";
Vue.use(CodeView);

import ellipsis from './components/multilineEllipsis/index'
import cellipsis from './components/multilineEllipsis/ellipsis.vue'
Vue.config.productionTip = false

Vue.use(ellipsis)
Vue.component('ellipsis', cellipsis)
new Vue({
  render: h => h(App),
}).$mount('#app')
