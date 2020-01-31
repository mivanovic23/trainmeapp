import Vue from 'vue'
import Router from 'vue-router'
import Pocetna from '@/components/Pocetna'
import Home from '@/components/Home'
import ViewWorkout from '@/components/ViewWorkout'
import NewWorkout from '@/components/NewWorkout'
import EditWorkout from '@/components/EditWorkout'
import Login from '@/views/Login'
import Signup from '@/views/Signup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pocetna',
      component: Pocetna
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-workout',
      component: NewWorkout
    },
    {
      path: '/:Workout',
      name: 'view-workout',
      component: ViewWorkout
    },
    {
      path: '/edit/:Workout',
      name: 'edit-workout',
      component: EditWorkout
    }
  ]
})
