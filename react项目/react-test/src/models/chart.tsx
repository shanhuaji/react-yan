import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { chartReq } from '@/service';
import { Chart } from '@antv/g2';
export interface IndexModelState {
  name: string;
}
export interface IndexModelType {
  namespace: string;
  state: IndexModelState;
  effects: {
    getG2: Effect;
  };
  reducers: {
    // 启用 immer 之后
    GETG2: ImmerReducer<IndexModelState>;
  };
    subscriptions: { setup: Subscription };
}
const IndexModel: IndexModelType = {
  namespace: 'chart',
  state: {
    name: '',
  },
  effects: {
    *getG2({ payload }, { call, put }) {
      /* console.log(yield call(chartReq)); */
      const data = [
        { monthd: '10月', sales: 250 },
        { monthd: '11月', sales: 750 },
        { monthd: '12月', sales: 900 },
        { monthd: '1月', sales: 500 },
        { monthd: '2月', sales: 150 },
        { monthd: '3月', sales: 500 },
        { monthd: '4月', sales: 250 },
        { monthd: '5月', sales: 300 },
        { monthd: '6月', sales: 750 },
        { monthd: '7月', sales: 500 },
        { monthd: '8月', sales: 250 },
        { monthd: '9月', sales: 300 },
      ];
      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500,
      });

      chart.data(data);
      chart.scale('sales', {
        nice: true,
      });

      chart.tooltip({
        showMarkers: false,
      });
      chart.interaction('active-region');

      chart.interval().position('monthd*sales');

      chart.render();
    },
  },
  reducers: {
    // 启用 immer 之后
    GETG2(state, action) {
      /*  state.name = action.payload; */
    },
  },
    subscriptions: {
      setup({ dispatch, history }) {
       /*  return history.listen(({ pathname }) => {
          if (pathname === '/') {
            dispatch({
              type: 'query',
            })
          }
        }); */
        /* console.log(dispatch);
        console.log(history.location.pathname); */
        
      }
    }
};
export default IndexModel;
