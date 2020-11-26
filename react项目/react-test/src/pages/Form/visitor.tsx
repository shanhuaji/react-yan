import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import EditableTable from './TableForm';
import styles from './index.less';
import { connect } from 'umi';

const { TabPane } = Tabs;
export default connect(state => {
  console.log(state);
  return state;
})(function Visitor({ dispatch }) {
  useEffect(() => {
    dispatch({
      type: 'form/getForm',
    });
  }, []);
  const callback = key => {
   console.log(key);
   
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        style={{ backgroundColor: '#ccc' }}
        animated
      >
        <TabPane tab="Tab 1" key="1">
          <div className={styles.box_null}></div>
          <EditableTable />
          <div id='cll' style={{width:'400px',height:"400px"}}></div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <div className={styles.box_null}></div>
          {/* <div id='cll'></div> */}
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <div className={styles.box_null}></div>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
});
