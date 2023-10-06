import { Pagination, Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import PostService from '../services';
import Post from '../components/Post';
import PostsSkeleton from '../components/PostsSkeleton';

const Posts = () => {
  const posts = useAppSelector((state) => state.post.list);
  const count = useAppSelector((state) => state.post.count);
  const loading = useAppSelector((state) => state.post.loading);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  function handlePagination(value: number) {
    setPage(value);
  }

  useEffect(() => {
    dispatch(PostService.getList({ page }));
  }, [page, dispatch]);

  if (posts?.length === 0 && !loading) {
    return <Empty description={'No posts found'} />;
  }
  return (
    <div>
      {loading ? (
        <PostsSkeleton />
      ) : (
        <div className={'grid grid-cols-4 gap-4'}>
          {posts?.map((post) => (
            <Post
              key={post._id}
              title={post.title}
              body={post.body}
              image={'https://picsum.photos/200/200'}
              link={'/posts/' + post._id}
            />
          ))}
        </div>
      )}
      <div className={'mt-4 flex justify-end'}>
        <Pagination defaultCurrent={1} total={count} onChange={handlePagination} />
      </div>
    </div>
  );
};

export default React.memo(Posts);
