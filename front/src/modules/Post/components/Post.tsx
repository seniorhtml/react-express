import { EditOutlined, HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import type { IPost } from '../types';

const Post = ({ title, body, image, link }: IPost & { link: string }) => {
  function handleEdit() {
    console.log('edit');
  }
  function handleLike() {
    console.log('like');
  }

  return (
    <Card
      cover={
        <Link to={link}>
          <img alt={title} src={image} className={'h-full min-h-[356px] object-cover'} />
        </Link>
      }
      actions={[
        <EditOutlined onClick={handleEdit} key={'edit'} />,
        <HeartOutlined onClick={handleLike} key={'heart'} />,
      ]}
    >
      <Link to={link}>
        <Card.Meta title={title} description={body} />
      </Link>
    </Card>
  );
};

export default React.memo(Post);
