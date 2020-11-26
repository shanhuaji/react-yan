import React from 'react';
import { Avatar, Menu, Dropdown, Button, } from 'antd';
import styles from './app.less';
import { Link } from 'umi';
import {
  SearchOutlined,
  QuestionOutlined,
  BellOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import fn from '@/pages/404/test';
import Bread from './components/breadcrumb';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        个人信息
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <Button type="primary">
        <Link to="/form/staff">登出</Link>
      </Button>
    </Menu.Item>
  </Menu>
);
interface InitInfo {
  (initInfo: object): void;
}

export const layout = {
  logout: () => {},
  rightRender: (initInfo: InitInfo) => {
    return (
      <div className={styles.box}>
        <Bread></Bread>
        <div className={styles.box_icon}>
          <SearchOutlined />
          <QuestionOutlined />
          <BellOutlined />
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <div>
              <Avatar
                size={36}
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3812152842,3500673418&fm=15&gp=0.jpg"
              />
              <span>admin</span>
            </div>
          </Dropdown>
          <GlobalOutlined />
        </div>
      </div>
    );
  },
};

/* 最先执行 */
export async function getInitialState() {
  const data = await fn();
  /* console.log(data); */
  return data;
}
