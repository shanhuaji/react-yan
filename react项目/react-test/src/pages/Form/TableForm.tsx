import React, { useState,useEffect } from 'react';
import { Button, Input, InputNumber, Popconfirm, Form, Table } from 'antd';
import { connect } from 'umi';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
  msg: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    msg: '尤雨溪',
  });
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default function EditableTable(){

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
      msg: '尤雨溪',
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: '内容',
      dataIndex: 'address',
      width: '30%',
      editable: true,
    },
    {
      title: '作者',
      dataIndex: 'msg',
      width: '10%',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={async () => {
                console.log('确定', await save(record.key));
              }}
              style={{
                marginRight: 8,
              }}
            >
              确定
            </a>
            <Popconfirm title="确认取消修改?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <div style={{ display: 'flex' }}>
            <Button
              type="primary"
              /* disabled={editingKey !== ''}  */ onClick={() => {
                console.log(edit(record));
                console.log(record);
              }}
            >
              修改
            </Button>
            <Button type="primary" danger>
              删除
            </Button>
          </div>
        );
      },
      width: '15%',
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <div>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
          style={{ background: '#fafafa' }}
        />
      </Form>

    </div>
  );
};

// ReactDOM.render(<EditableTable />, mountNode);
