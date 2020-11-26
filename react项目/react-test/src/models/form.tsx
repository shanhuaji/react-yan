import { Effect } from 'umi';
import { Chart } from '@antv/g2';

export interface FormModelState {
  form: object;
}
export interface FormModelType {
  namespace: string;
  state: FormModelState;
  effects: {
    getForm: Effect;
  };
  reducers: {};
  //   subscriptions: { setup: Subscription };
}
const IndexModel: FormModelType = {
  namespace: 'form',
  state: {
    form: {},
  },
  effects: {
    *getForm({ payload }, { call, put }) {
      let val = '良';
      const data = [
        { item: '事例一', count: 22, percent: 0.22 },
        { item: '事例二', count: 78, percent: 0.78 },
        /* { item: '事例三', count: 17, percent: 0.17 },
        { item: '事例四', count: 13, percent: 0.13 },
        { item: '事例五', count: 9, percent: 0.09 }, */
      ];
      const chart = new Chart({
        container: 'cll',
        autoFit: true,
        height: 500,
      });
      chart.data(data);
      chart.scale('percent', {
        formatter: val => {
          val = val * 100 + '%';
          return val;
        },
      });
      chart.coordinate('theta', {
        radius: 0.75,
        innerRadius: 0.6,
      });
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl:
          '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
      });
      // 辅助文本
      chart
        .annotation()
        /* .regionFilter({color:}) */
        .text({
          position: ['50%', '50%'],
          content: val,
          style: {
            fontSize: 14,
            fill: '#8c8c8c',
            textAlign: 'center',
          },
          offsetY: -20,
        })
        .text({
          position: ['50%', '50%'],
          content: '22%',
          style: {
            fontSize: 20,
            fill: '#8c8c8c',
            textAlign: 'center',
          },
          /*  offsetX: -10, */
          offsetY: 20,
        });
        
      /* .text({
          position: ['50%', '50%'],
          content: '台',
          style: {
            fontSize: 14,
            fill: '#8c8c8c',
            textAlign: 'center',
          },
          offsetY: 20,
          offsetX: 20,
        }); */
      chart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('item',['#00FF00', '#eee'])
        .label('percent', percent => {
          return {
            content: data => {
              return `${data.item}: ${percent * 100}%`;
            },
          };
        })
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%';
          return {
            name: item,
            value: percent,
          };
        });
      chart.on('click', evt => {
        const { type, view, gEvent, data, x, y, clientX, clientY } = evt;
        val = data.data.item;
        console.log(val);
      });
  
      chart.render();
    },
  },
  reducers: {
    getForm(state, action) {},
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
