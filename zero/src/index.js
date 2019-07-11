import Vue from 'vue'
import App from './app.vue'
require('./main')
require('./a.js')

const root = document.createElement('div')
document.body.appendChild(root)

console.log('当前环境',process.env.NODE_ENV)
new Vue({
    render: h => h(App)
}).$mount(root)
