import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Table, Popconfirm,message } from 'antd';
import {useRequest} from 'ahooks'
import { phoneReq, shopReq } from '@/service/index';
export default connect(state => state)(function Phonedetails({ dispatch, details }) {
 /*  let {data, error, loading} =useRequest('/api/users');
  console.log('data',data);
  console.log('error',error);
  console.log('loading',loading); */
  
  useEffect(() => {
    dispatch({
      type: 'details/getPhone',
    });
  }, []);

  let { phone } = details;
  
  const columns = [
    {
      title: '序号',
      width: 20,
      dataIndex: 'id',
      fixed: 'left',
    },
    {
      title: '名字',
      width: 40,
      dataIndex: 'name',
      /* key: 'name', */
      fixed: 'left',
    },
    {
      title: '年龄',
      width: 40,
      dataIndex: 'age',
      /*  key: 'age', */
      fixed: 'left',
    },
    {
      title: '邮箱',
      dataIndex: 'address',
      /*   key: '1', */
      width: 100,
    },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 50,
      render: () => <a>action</a>,
    },
  ];
  const date: any[] | undefined = [];
  phone.map(
    (item: { id: React.ReactNode; name: any; username: any; email: any }) => {
      date.push({
        id: <div style={{ color: 'blue' }}>{item.id}</div>,
        key: item.id,
        name: item.name,
        age: item.username,
        address: item.email,
      });
    },
  );
  const position = {
    pageSize: 5,
    total: 85,
  };
  return (
    <div>
      <p>手机详情</p>

      <Table
        columns={columns}
        dataSource={date}
        scroll={{ y: 300 }}
        bordered
        sticky
      />
    </div>
  );
});
