import SingleSkeleton from '../components/SingleSkeleton.tsx';
import BookService from '../services';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { useParams } from 'react-router-dom';
import { EditOutlined, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Single() {
  const { id } = useParams();
  const single = useAppSelector((state) => state.book.single);
  const loading = useAppSelector((state) => state.book.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;
    dispatch(BookService.getBook(id));
  }, [id, dispatch]);

  return (
    <div>
      {loading ? (
        <SingleSkeleton />
      ) : (
        <div>
          <img
            src={'https://picsum.photos/200/200'}
            alt={single.title}
            className={'w-full h-[600px] object-cover'}
          />
          <h1
            className={
              'text-3xl font-extrabold text-slate-900 tracking-tight uppercase my-4'
            }
          >
            {single.title}
          </h1>
          <p className={'text-lg text-slate-700'}>{single.body}</p>
          <div className={'flex items-center gap-2'}>
            <Button type="primary" icon={<EditOutlined />} />
            <Button type="primary" icon={<HeartOutlined />} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Single;
