import React, { useEffect } from 'react';
import { connect } from 'umi';

export default connect(state => {
  return state;
})(function Two({ dispatch, date }) {
  useEffect(() => {
    dispatch({
      type: 'date/two',
      payload: '测试',
    });
  }, []);
  let {
    name: { name, age },
  } = date;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
});
