import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const { Title } = Typography;


const Login: React.FC = () => {

  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Simulação de login
    setTimeout(() => {
      setLoading(false);
      message.success("Login successful!");
    }, 2000);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Failed to log in. Please check your details.");
  };

  return (
    <div style={{ width: 300, margin: "0 auto", padding: "100px 0" }}>

      <Title level={3} style={{ textAlign: "center" }}>
    sahjdgtsahkjdgh sakjd
      </Title>
      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%" }}
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
