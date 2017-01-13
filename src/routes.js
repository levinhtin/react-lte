import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import {SignupPage, SigninPage, DashboardPage} from './components/pages';


const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: DashboardPage
    },
    childRoutes: [
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