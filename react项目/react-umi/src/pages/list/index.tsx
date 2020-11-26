import React, { useEffect } from 'react';
import { connect } from 'umi';

export default connect(state => {
  return state;
})(function list({ dispatch, list }) {
  useEffect(() => {
    dispatch({
      type: 'list/Index',
    });
  }, []);
  let {
    obj: { name, age },
  } = list;

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
});
