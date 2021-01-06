import BasicLayout from '@/layouts/BasicLayout';
import jobs from '@/pages/jobs';
import pipeline from '@/pages/pipeline';
import env from '@/pages/env';
import runner from '@/pages/runner';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/jobs', component: jobs },
      { path: '/pipeline', component: pipeline },
      { path: '/env', component: env },
      { path: '/runner', component: runner },
    ],
  },
];

export default routerConfig;
