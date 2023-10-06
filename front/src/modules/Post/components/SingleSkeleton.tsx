import { Card, Skeleton } from 'antd';
import React from 'react';

const SingleSkeleton = () => {
  return (
    <Card cover={<Skeleton.Image active={true} className={'!w-full !h-[600px]'} />}>
      <Skeleton active={true} paragraph={{ rows: 2 }} />
    </Card>
  );
};

export default React.memo(SingleSkeleton);
