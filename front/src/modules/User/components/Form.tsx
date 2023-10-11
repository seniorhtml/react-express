import { Button, Form as FormAntd, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/store';
import React from 'react';
import type { IUser } from '../types';

const Form = ({ buttonClick }: { buttonClick: (values: never) => void }) => {
  const [form] = FormAntd.useForm();
  const loading = useAppSelector((state) => state.user.loading);

  return (
    <div className={'flex items-center justify-center w-full h-full'}>
      <FormAntd
        // @ts-ignore
        form={form}
        name="register"
        className={'w-1/3'}
        onFinish={buttonClick}
      >
        <FormAntd.Item<IUser>
          name="username"
          rules={[{ required: true, message: 'Please input your username!', min: 4 }]}
          hasFeedback
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </FormAntd.Item>

        <FormAntd.Item<IUser>
          name="password"
          rules={[{ required: true, message: 'Please input your password!', min: 4 }]}
          hasFeedback
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </FormAntd.Item>

        <FormAntd.Item>
          <Button type="primary" htmlType="submit" className={'w-full'} loading={loading}>
            Submit
          </Button>
        </FormAntd.Item>
      </FormAntd>
    </div>
  );
};

export default React.memo(Form);
