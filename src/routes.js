import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';
import Header from './components/Header.vue';

export const routes = [
  { path: '', name: 'home', components: {
    default: Home,
    'header-top': Header,
    }
  },
  { path: '/user', components: {
    default: User,
    'header-bottom': Header,
    },
    children: [
    // these are nested routes
    { path: '', component: UserStart},
    { path: ':id', component: UserDetail},
    { path: ':id/edit', component: UserEdit, name: 'userEdit'},
  ]},
  { path: '/redirect-me', redirect: {name: 'home'} }
];
