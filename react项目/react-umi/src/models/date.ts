import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { dataReq } from '@/service';
export interface IndexModelState {
  name: object;
}
export interface IndexModelType {
  namespace: string;
  state: IndexModelState;
  effects: {
    two: Effect;
  };
  reducers: {
    TWO: ImmerReducer<IndexModelState>;
  };
  // subscriptions: { setup: Subscription };
}
const IndexModel: IndexModelType = {
  namespace: 'date',
  state: {
    name: {},
  }, 
  effects: {
    *two({ payload }, { call, put }) {
      let {
        data: { name, age },
      } = yield call(dataReq);
      yield put({
        type: 'TWO',
        payload: {
          name,
          age,
        },
      });
    },
  },
  reducers: {
    // 启用 immer 之后
    TWO(state, { payload }) {
      /* console.log('state', state);
      console.log('payload', payload); */
       state.name = payload;
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
