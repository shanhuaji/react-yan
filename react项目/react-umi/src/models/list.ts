import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { listReq } from '@/service';
export interface IndexModelState {
  obj: object;
}
export interface IndexModelType {
  namespace: string;
  state: IndexModelState;
  effects: {
    Index: Effect;
  };
  reducers: {
    // 启用 immer 之后
    INDEX: ImmerReducer<IndexModelState>;
  };
  //   subscriptions: { setup: Subscription };
}
const IndexModel: IndexModelType = {
  namespace: 'list',
  state: {
    obj: {},
  },
  effects: {
    *Index({ payload }, { call, put }) {
      let { name, age } = yield call(listReq);
      yield put({
        type: 'INDEX',
        payload: {
          name,
          age,
        },
      });
    },
  },
  reducers: {
    // 启用 immer 之后
    INDEX(state, { payload }) {
      state.obj = payload;
    },
  },
  /* subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          })
        }
      });
    }
  } */
};
export default IndexModel;
