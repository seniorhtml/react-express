import { EditOutlined, HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import type { IBook } from '../types';

type BookProps = Omit<IBook, 'id'> & { link: string };

function Book({ title, body, image, link }: BookProps) {
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
}

export default Book;
