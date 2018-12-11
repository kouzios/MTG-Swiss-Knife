// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUsers)
library.add(faSync);
library.add(faCog);
library.add(faCoins);
library.add(faBook);
library.add(faLevelUpAlt);
library.add(faInfinity);
library.add(faAdjust);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
