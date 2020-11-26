import React, { useCallback, useState, useMemo } from 'react';
import { useModel /* useAccess */ } from 'umi';
import { Button, Menu, Dropdown } from 'antd';
import useAuthModel from '@/models/useAuthModel';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
export default function Onelist(props) {
  const { user, fetchUser } = useModel('useAuthModel', useAuthModel => ({
    user: useAuthModel.user,
    fetchUser: useAuthModel.fetchUser,
  }));

  /* console.log(useModel('@@initialState')); */
  /*   const access = useAccuseAuthModeless();
  console.log(access); */
  /*  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]); */
  /* if(bool){
    return <CaretUpOutlined/>
  }else if(bool==false){
    return <CaretDownOutlined/>
  } */
  let [icon, setIcon] = useState(<CaretUpOutlined />);
  let [bool, setBool] = useState(false);
  const clickHandler = () => {
    setBool(!bool);
    bool ? setIcon(<CaretUpOutlined />) : setIcon(<CaretDownOutlined />);
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">线上 </Menu.Item>
      <Menu.Item key="1">线下 </Menu.Item>
    </Menu>
  );
  return (
    <div>
      一级列表
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomCenter"
        arrow
      >
        <span onClick={clickHandler}>{icon}</span>
      </Dropdown>
      ,
      {/*  <h4>
        {count}-{expensive}
      </h4>
      {val}
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={event => setValue(event.target.value)} />
      </div> */}
    </div>
  );
}
