import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  //路由模式 BrowserRouter
  router: {
    type: 'browser',
  }
};

runApp(appConfig);
