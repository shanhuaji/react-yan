import React, { useEffect, useCallback ,useMemo} from 'react';
import { connect } from 'umi';

export default connect(state => {
  // console.log(state.details.shop);
  return state;
})(function Shopdetails({ dispatch, details }) {
  useEffect(() => {
    dispatch({
      type: 'details/getShop',
      payload: 'admin',
    });
  }, []);
  /* 
  console.log(details); */

  let { shop } = details;
 
  const memo = useMemo(() => {
    console.log('shop',shop);

    return shop;
  }, [shop]);

  return (
    <div>
      <p>商品详情</p>
      <p>{shop.status}</p>
      <p>{shop.msg}</p>
    </div>
  );
});
