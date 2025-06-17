import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;


const Login: React.FC = () => {

  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    // Simulação de login
    setTimeout(() => {
      setLoading(false);
      message.success("Login successful!");
    }, 2000);
  };

  return (
    <div style={{ width: 300, margin: "0 auto", padding: "100px 0" }}>

      <Title level={3} style={{ textAlign: "center" }}>
      Realizar Login
      </Title>
      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Por favor insira seu Email" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Email"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por favor insira sua Senha!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Senha"
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
