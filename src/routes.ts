import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import 任务列表 from '@/pages/任务列表';
import 流水线 from '@/pages/流水线';
import 环境信息 from '@/pages/环境信息';
import 执行机列表 from '@/pages/执行机列表';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/jobs', component: 任务列表 },
      { path: '/pipeline', component: 流水线 },
      { path: '/env', component: 环境信息 },
      { path: '/runner', component: 执行机列表 },
      { path: '/', exact: true, component: Dashboard },
    ],
  },
];

export default routerConfig;
