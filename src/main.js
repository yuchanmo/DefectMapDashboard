/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

//import kendo ui component
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Chart,
  ChartSeriesItem,
  Sparkline,
  SparklineSeriesItem,
  StockChart,
  ChartInstaller } from '@progress/kendo-charts-vue-wrapper';
import '@progress/kendo-ui/js/kendo.dataviz.chart';
Vue.use(ChartInstaller);
// Layouts
import Default from '@/layouts/Default.vue';

ShardsVue.install(Vue);

Vue.component('default-layout', Default);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

/* eslint-disable eol-last */ 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
