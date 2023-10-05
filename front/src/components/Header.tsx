import { Avatar, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const headerLinks = [
  {
    path: '/',
    label: 'Book',
  },
  {
    path: '/create-post',
    label: 'Create Post',
  },
];

const Header = () => {
  return (
    <Layout.Header style={{ height: 'auto' }}>
      <div className={'container flex items-center justify-between py-3'}>
        <div className={'flex items-center gap-5'}>
          {headerLinks.map((item) => (
            <Link key={item.path} to={item.path} className={'!text-white'}>
              {item.label}
            </Link>
          ))}
          <button className={'text-red-600'}>Logout</button>
        </div>
        <div className={'flex items-center gap-2'}>
          <h1 className={'!text-white cursor-pointer'}>username</h1>
          <Avatar
            className={'cursor-pointer'}
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={<img src={'https://picsum.photos/200/200'} alt="avatar" />}
          />
        </div>
      </div>
    </Layout.Header>
  );
};

export default React.memo(Header);
