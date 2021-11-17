import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const demo1 = ()=>import('./views/demo1');
const demo2 = ()=>import('./views/demo2');
const demo3 = ()=>import('./views/demo3');
const demo4 = ()=>import('./views/demo4');

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/demo1'
    }, {
        path: '/demo1',
        name: 'demo1',
        component: demo1
    }, {
        path: '/demo2',
        name: 'demo2',
        component: demo2
    }, {
        path: '/demo3',
        name: 'demo3',
        component: demo3
    },  {
        path: '/demo4',
        name: 'demo4',
        component: demo4
    }]
})
