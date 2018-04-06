import * as consts from './consts';

export const initAction = (data) => {
  console.log(data);
  console.log(consts.INIT_ACTION);
  return {
    type: consts.INIT_ACTION,
    payload: data
  }
};
