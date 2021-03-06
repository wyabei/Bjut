import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import('./views/Home.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () =>
        import('./views/Article.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import('./views/Login.vue'),
    },
    {
      path: '/userCenter',
      name: 'userCenter?id=8',
      component: () =>
        import('./views/UserCenter.vue'),
      meta: {
        title: 'User Center'
      },
      beforeEnter:(to,from,next)=>{
        if(sessionStorage.userId|| sessionStorage.userEmail){
          next();
        }else{
          next({path:'/login'})
        }
      },
      children: [{
        path: '/',
        component: () =>
          import('./views/UserCenterDefult.vue')
      },
      {
        path: '/userInfo',
        name: 'userInfo?id=8',
        component: () =>
          import('./views/UserInfo.vue'),
        meta: {
          title: 'Personal Information'
        }
      },
      {
        path:'/abstractSubmission',
        name:'abstractSubmission',
        component: ()=>
        import('./views/AbstractSubmission.vue'),
        meta:{
          title:"Abstract Submission"
        }
      },
      {
        path:'/modifypassword',
        name:'modifypassword',
        component: ()=>
        import('./views/ModifyPassword.vue'),
        meta:{
          title:'Modify Password'
        }
      },
      {
        path:'/fullpaper',
        name:'fullpaper',
        component: ()=>
        import('./views/FullPaper.vue'),
        meta:{
          title:'Full Paper Submission'
        }
      },
      {
        path:'/registration',
        name:'registration',
        component: ()=>
        import('./views/Registration.vue'),
        meta:{
          title:'Registration'
        }
      },
      ]
    },
  ]
})
