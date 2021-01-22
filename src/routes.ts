import BasicLayout from '@/layouts/BasicLayout';
import Basic from '@/layouts/Basic';
import pipeline from '@/pages/pipeline';
import env from '@/pages/env';
import runner from '@/pages/runner';
import login from '@/pages/login';
import NotFound from '@/pages/notfound';
import plugin from '@/pages/plugin';

const routerConfig = [
  {
    path: '/menu',
    component: BasicLayout,
    children: [
      { path: '/pipeline', component: pipeline },
      { path: '/env', component: env },
      { path: '/runner', component: runner },
      { path: '/menu/plugin', component: plugin },
      { path: '/', redirect: '/menu/pipeline' },
      { component: NotFound },
    ],
  },
  {
    path: '/login',
    component: Basic,
    children: [{ path: '/', component: login }],
  },
  { path: '/', redirect: '/login' },
];

export default routerConfig;
