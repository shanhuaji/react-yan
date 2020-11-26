import React, { useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'umi';
import routes from '../config/route';

export default function breadcrumb(props: any) {
  /* console.log(props.params);
  
  const itemRender = (route, params, routes, paths) => {
    console.log('route',route);
    console.log('params',params);
    console.log();
    console.log();
    
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
  }; */

  return (
    <div>
      <Breadcrumb /* itemRender={itemRender} routes={routes} */>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
