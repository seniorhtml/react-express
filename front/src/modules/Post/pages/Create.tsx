import React, { useState } from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import PostService from '../services';
import type { IPost } from '../types';
import type { ValidateStatus } from 'antd/lib/form/FormItem';

const Create = () => {
  const [form] = Form.useForm();
  const [validateStatus, setValidateStatus] = useState<ValidateStatus>('');
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.post.loading);

  const onFinish = (values: never) => {
    setValidateStatus('success');
    dispatch(PostService.createPost(values))
      .then(() => {
        setValidateStatus('success');
        form.resetFields();
      })
      .catch(() => {
        setValidateStatus('error');
      });
  };
  const onFinishFailed = () => {
    setValidateStatus('error');
  };

  return (
    <div className={'flex items-center justify-center w-full h-full'}>
      <Form
        // @ts-ignore
        form={form}
        name="createBook"
        className={'w-1/3'}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<IPost>
          name="title"
          rules={[{ required: true, message: 'Please input title!' }]}
          validateStatus={validateStatus}
          hasFeedback
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item<IPost>
          name="body"
          rules={[{ required: true, message: 'Please input body!' }]}
          validateStatus={validateStatus}
          hasFeedback
        >
          <Input.TextArea placeholder="Body" rows={4} />
        </Form.Item>

        <Form.Item<IPost>
          name="image"
          rules={[{ required: false, message: 'Please choose image!' }]}
          validateStatus={validateStatus}
          hasFeedback
        >
          <Upload
            listType="picture-card"
            maxCount={1}
            action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
          >
            <Button icon={<UploadOutlined />}></Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={'w-full'} loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(Create);
