/*
 * @Author: xinyu.wang <xinyu.wang@wuage.com>
 * @Version: 0.0.1
 * @Date: 2017-12-11 17:22:48
 * @Last Modified by:   xinyu.wang
 * @Last Modified Time: 2017-12-11 17:22:48
 */

import vue from 'vue'
import app from './app.vue'
import test from '../src/index'
import Plupload from 'plupload'
vue.use(test, {Plupload})
new vue({
  el: '#app',
  render: h => h(app)
})