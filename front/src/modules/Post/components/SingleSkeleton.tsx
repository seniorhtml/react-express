import { Card, Skeleton } from 'antd';

function SingleSkeleton() {
  return (
    <Card cover={<Skeleton.Image active={true} className={'!w-full !h-[600px]'} />}>
      <Skeleton active={true} paragraph={{ rows: 2 }} />
    </Card>
  );
}

export default SingleSkeleton;
