import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { phoneReq, shopReq } from '../service/index';
import { useRequest } from 'ahooks';

export interface IndexModelState {
  phone: object;
  shop: object;
}
export interface IndexModelType {
  namespace: string;
  state: IndexModelState;
  effects: {
    getPhone: Effect;
    getShop: Effect;
  };
  reducers: {
    /* save: Reducer<IndexModelState>; */
    // 启用 immer 之后
    GETPHONE: ImmerReducer<IndexModelState>;
    GETSHOP: ImmerReducer<IndexModelState>;
  };
  //   subscriptions: { setup: Subscription };
}
const IndexModel: IndexModelType = {
  namespace: 'details',
  state: {
    phone: [],
    shop: {},
  },
  effects: {
    *getPhone({ payload }, { call, put }) {
      // console.log(payload);
      const data = yield call(phoneReq)
      
     /*  let {
        data: { status, msg },
      } = yield call(phoneReq); */

      yield put({
        type: 'GETPHONE',
      /*   payload: {
          status,
          msg,
        }, */
        payload:data
      });
    },
    *getShop({ payload }, { call, put }) {
      let {
        data: { status, msg },
      } = yield call(shopReq, payload);
      yield put({
        type: 'GETSHOP',
        payload: {
          status,
          msg,
        },
      });
    },
  },
  reducers: {
    // 启用 immer 之后
    GETPHONE(state, { payload }) {
      state.phone = payload;
    },
    GETSHOP(state, { payload }) {
      state.shop = payload;
    },
  },
  /*  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  }, */
};
export default IndexModel;
