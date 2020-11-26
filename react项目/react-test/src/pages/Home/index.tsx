import React, { useEffect } from 'react';
import styles from './index.less';
import { Card, Col, Row, DatePicker, Space } from 'antd';
import { connect,useModel } from 'umi';
import { useRequest } from 'ahooks';


export default connect(state => state)(function Home({ dispatch }){
  const { data, error, loading } = useRequest('/api/users');
console.log('data',data);
console.log('error',error);
console.log('loading',loading);
  const { RangePicker } = DatePicker;
  useEffect(() => {
    dispatch({
      type: 'chart/getG2',
    });
  }, []);
  return (
    <div style={{minWidth:'900px'}}>
      <div>
        <Row gutter={[16, 24]} className={styles.box}>
          <Col span={6}>
            <Card
              title="Card title"
              bordered={true}
              className={styles.box_card}
            >
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Card title"
              bordered={true}
              className={styles.box_card}
            >
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Card title"
              bordered={true}
              className={styles.box_card}
            >
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Card title"
              bordered={true}
              className={styles.box_card}
            >
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
      <div className={styles.chart}>
        <div className={styles.chart_top}>
          <div className={styles.left}>
            <span>销售额</span>
            <span>访问量</span>
          </div>
          <div className={styles.right}>
            <span>今日</span>
            <span>本周</span>
            <span>本月</span>
            <span>全年</span>
            <div>
              <Space direction="vertical" size={10}>
                <RangePicker />
              </Space>
            </div>
          </div>
        </div>
        <div className={styles.chart_middle}>
          <div className={styles.left}>
            <p>销售额趋势</p>
            <div id="container" className={styles.chart_left}></div>
          </div>
          <div className={styles.right}>
            <p>门店销售额排名</p>
            <div>
              <ul>
                <li>
                  <span>1</span>
                  <span>工业路一号店</span>
                </li>
                <span>323,234</span>
              </ul>
              <ul>
                <li>
                  <span>2</span>
                  <span>工业路二号店</span>
                </li>
                <span>323,234</span>
              </ul>
              <ul>
                <li>
                  <span>3</span>
                  <span>工业路三号店</span>
                </li>
                <span>323,234</span>
              </ul>
              <ul>
                <li>
                  <span>4</span>
                  <span>工业路四号店</span>
                </li>
                <span>323,234</span>
              </ul>
              <ul>
                <li>
                  <span>5</span>
                  <span>工业路五号店</span>
                </li>
                <span>323,234</span>
              </ul>
              <ul>
                <li>
                  <span>6</span>
                  <span>工业路六号店</span>
                </li>
                <span>323,234</span>
              </ul>
              <ul>
                <li>
                  <span>7</span>
                  <span>工业路七号店</span>
                </li>
                <span>323,234</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});


