import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import AuthService from '../services';
import type { IUser } from '../types';

function Register() {
  const [toast, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const loading = useAppSelector((state) => state.auth.loading);
  const dispatch = useAppDispatch();

  function submit(values: never) {
    dispatch(AuthService.register(values));
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
        name="register"
        className={'w-1/3'}
        onFinish={submit}
      >
        <Form.Item<IUser>
          name="username"
          rules={[{ required: true, message: 'Please input your username!', min: 4 }]}
          hasFeedback
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item<IUser>
          name="password"
          rules={[{ required: true, message: 'Please input your password!', min: 4 }]}
          hasFeedback
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={'w-full'} loading={loading}>
            Submit
          </Button>
          Or <Link to="/login">login now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
