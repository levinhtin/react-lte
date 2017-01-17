import React from 'react';
import {Route, IndexRoute} from 'react-router';
import requireAuth from 'utils/requireAuth';
import App from 'components/app';
import {SignupPage, SigninPage, DashboardPage, UsersPage} from 'components/pages';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: requireAuth('sigin', DashboardPage, ['Admin', 'Manager', 'Memember'])
    },
    childRoutes: [
      {
        path: 'users',
        component: UsersPage
      },
      {
        path: 'signin',
        component: SigninPage
      },
      {
        path: 'signup',
        component: SignupPage
      }
    ]
  }
];

export default routes;