import { Pagination, Empty } from 'antd';
import Book from '../components/Book.tsx';
import BooksSkeleton from '../components/BooksSkeleton.tsx';
import BookService from '../services';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import type { IBook } from '../types';

function Books() {
  const books = useAppSelector((state) => state.book.list);
  const count = useAppSelector((state) => state.book.count);
  const loading = useAppSelector((state) => state.book.loading);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  function handlePagination(value: number) {
    setPage(value);
  }

  useEffect(() => {
    dispatch(BookService.getBooks({ page }));
  }, [page, dispatch]);

  if (books?.length === 0 && !loading) {
    return <Empty description={'No books found'} />;
  }
  return (
    <div>
      {loading ? (
        <BooksSkeleton />
      ) : (
        <div className={'grid grid-cols-4 gap-4'}>
          {books?.map((book: IBook) => (
            <Book
              key={book.id}
              title={book.title}
              body={book.body}
              image={'https://picsum.photos/200/200'}
              link={'/book/' + book.id}
            />
          ))}
        </div>
      )}
      <div className={'mt-4 flex justify-end'}>
        <Pagination defaultCurrent={1} total={count} onChange={handlePagination} />
      </div>
    </div>
  );
}

export default Books;
