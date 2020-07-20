import Home from './assets/components/Home';
import Header from './assets/components/Header';

const User = resolve => {
    require.ensure(['./assets/components/user/User.vue'], () => {
        resolve(require('./assets/components/user/User.vue'));
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./assets/components/user/UserStart.vue'], () => {
        resolve(require('./assets/components/user/UserStart.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./assets/components/user/UserEdit.vue'], () => {
        resolve(require('./assets/components/user/UserEdit.vue'));
    },'user');
};
const UserDetail = resolve => {
    require.ensure(['./assets/components/user/UserDetail.vue'], () => {
        resolve(require('./assets/components/user/UserDetail.vue'));
    }, 'user');
};


export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header,
    } },
    { path: '/user', components: {
        default: User,
        'header-bottom': Header,
    },
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('inside route setup');
                next();
                }
            },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]},
    { path: '/redirect-me', redirect: {name: 'home'} },
    { path: '*', redirect: '/' }
]