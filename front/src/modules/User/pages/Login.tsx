import { Button, Checkbox, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import UserService from '../services';
import React from 'react';
import type { IUser } from '../types';

export interface ILoginForm extends IUser {
  remember: string;
}

const Login = () => {
  const [toast, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loading);

  function submit(values: never) {
    dispatch(UserService.login(values));
    form.resetFields();
    toast.open({
      type: 'success',
      content: 'This is a success message',
    });
  }

  return (
    <div className={'flex items-center justify-center w-full h-full'}>
      {contextHolder}
      <Form
        // @ts-ignore
        form={form}
        name="login"
        className={'w-1/3'}
        onFinish={submit}
      >
        <Form.Item<ILoginForm>
          name="username"
          rules={[{ required: true, message: 'Please input your username!', min: 4 }]}
          hasFeedback
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item<ILoginForm>
          name="password"
          rules={[{ required: true, message: 'Please input your password!', min: 4 }]}
          hasFeedback
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item<ILoginForm> name="remember" valuePropName="checked">
          <div className={'flex items-center justify-between'}>
            <Checkbox>Remember me</Checkbox>
            <a href="">Forgot password</a>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={'w-full'} loading={loading}>
            Submit
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(Login);
