import { Form as FormAntd } from 'antd';
import { useAppDispatch } from '@/store';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../services';
import Form from '../components/Form';
import React from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [form] = FormAntd.useForm();
  const dispatch = useAppDispatch();

  function submit(values: never) {
    dispatch(UserService.login(values)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        form.resetFields();
        navigate('/');
      }
    });
  }

  return (
    <div>
      <Form buttonClick={submit} />
      <div className={'flex gap-2 justify-center'}>
        Or <Link to="/register">Register now!</Link>
      </div>
    </div>
  );
};

export default React.memo(Login);
