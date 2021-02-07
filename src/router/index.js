import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress/nprogress';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/portfolio/:id',
    name: 'Portfolio',
    component: () => import('../views/Single.vue'),
  }
]

const router = new VueRouter({
  routes,


  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

const startProgressBar = () => {
  NProgress.start()
};

const endProgressBar = () => {
  setTimeout(() => {
    NProgress.done();
  }, 700);
}


router.beforeEach(async(routeTo, routeFrom, next) => {
  startProgressBar();
  next();
});


router.afterEach((routeTo, routeFrom) => {
  endProgressBar();
});


export default router
