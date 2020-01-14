import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SearchList from '@/components/SearchList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'SearchList',
        component: SearchList
    }]
})