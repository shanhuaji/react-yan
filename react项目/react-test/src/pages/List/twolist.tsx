import React from 'react';
import { Checkbox, Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

export default class App extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  onChange = (e: { target: { checked: any } }) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = this.state.checked ? (
      <CaretUpOutlined />
    ) : (
      <CaretDownOutlined />
    );
    return (
      <>
        <Checkbox
          checked={this.state.checked}
          disabled={this.state.disabled}
          onChange={this.onChange}
          style={{ border: 'none', background: 'red', width: '20px' }}
        >
          {label}
        </Checkbox>
        {label}
      </>
    );
  }
}
