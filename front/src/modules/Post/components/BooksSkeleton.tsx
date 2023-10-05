import { Card, Skeleton } from 'antd';

function BooksSkeleton() {
  return (
    <div className={'grid grid-cols-4 gap-4'}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <Card
          key={item}
          cover={
            <Skeleton.Image active={true} className={'!h-full !w-full min-h-[356px]'} />
          }
        >
          <Skeleton active={true} paragraph={{ rows: 2 }} />
        </Card>
      ))}
    </div>
  );
}

export default BooksSkeleton;
