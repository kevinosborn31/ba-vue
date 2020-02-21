import Vue from 'vue'
import VueRouter from 'vue-router'
import FlightSearch from '../views/FlightSearch.vue'
import FlightSearchResults from '../views/FlightSearchResults.vue'
import FlightDetails from '../views/FlightDetails.vue'


Vue.use(VueRouter)

const routes = [
  //
  // <Route path="/" component={ Home } />
  {
    path: '/',
    name: 'Search',
    component: FlightSearch
  },
  {
    path: '/search/:origin/:destination',
    name: 'SearchResults',
    component: FlightSearchResults,
    props: true // make the URL symbols available
    // So we don't have to say this.$route.params.origin
    // We can just say this.origin (in React this.props.origin, this.state.____)
  },
  {
    path: '/flights/:id',
    name: 'FlightDetails',
    component: FlightDetails,
    props: true
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// const name = 'x', address='ysfsdf', age = 33;
// const obj = {
//   name: name,
//   address: address,
//   age: age
// }

const router = new VueRouter({
  routes
})

export default router
