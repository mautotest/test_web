import { runApp, IAppConfig } from 'ice';
import cf from './config'

const appConfig: IAppConfig = {
  
  app: {
    rootId: 'ice-container',
  },
  //路由模式 BrowserRouter
  router: {
    type: 'browser',
  },
    // 配置多个请求实例
  request: [
    {
      // 可选的，全局设置 request 是否返回 response 对象，默认为 false
      // withFullResponse: true,
      baseURL: cf.BASE_URL,
      headers:{},
      interceptors: {
        request:{
          onConfig:(request) =>{
            return request
          }
        },
        response: {
          // 可选的
          onConfig: (response) => {
            return response;
          },
          // 可选的
          onError: (error) => {
            return Promise.reject(error);
          }
        },
      }
    }
  ]
};

runApp(appConfig);
