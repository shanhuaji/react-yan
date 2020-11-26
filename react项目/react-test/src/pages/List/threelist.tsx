import React, { Component } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { TreeSelect, Button } from 'antd';

const { TreeNode } = TreeSelect;
const treeData = [
  {
    title: '应用',
    value: '应用',
    url: 'aa',
    children: [
      {
        title: '淘宝',
        value: '淘宝',
        url: 'bb',
      },
      {
        title: '京东',
        value: '京东',
        url: 'cc',
      },
    ],
  },
  {
    title: '名字',
    value: '名字',
    url: 'dd',
    children: [
      {
        title: '金世遗',
        value: '金世遗',
        url: 'ee',
      },
      {
        title: '金逐流',
        value: '金逐流',
        url: 'https://www.baidu.com',
      },
    ],
  },
  {
    title: '按钮',
    value: '按钮',
    url: 'ddd',
    children: [
      {
        title: <Button>金世遗</Button>,
        value: '金世遗1',
        url: 'eee',
      },
      {
        title: <Button>金逐流</Button>,
        value: '金逐流1',
        url: 'https://www.baidu.com',
      },
    ],
  },
];
export default class Demo extends Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  onSelect = (value: any, node: object, extra: any) => {
    console.log('value', value);
    console.log('node', node);
    console.log('extra', extra);
    // console.log(window.open(node.url));
  };

  onSearch = value => {
    console.log('onSearch', value);
    this.setState({ value });
  };

  clickHandler = e => {
    console.log(e.target);
  };
  render() {
    return (
      <div style={{ width: '400px', display: 'flex', margin: '0 auto' }}>
        <TreeSelect
          style={{ width: '100%' }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          treeDefaultExpandAll={true}
          showSearch
          placeholder="请输入搜索的内容"
          onChange={this.onChange}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
        />
       
        <Button onClick={this.clickHandler}>
          <SearchOutlined />
        </Button>
      </div>
    );
  }
}
