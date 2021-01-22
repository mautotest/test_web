import { request } from 'ice';

export default {
  // 简单场景
  async login(values) {
    return await request({
      url: `/login`,
      method:'post',
      data: values
    });
  },
}