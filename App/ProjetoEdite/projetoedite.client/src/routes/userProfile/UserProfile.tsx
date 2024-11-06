// src/UserProfile.tsx
import React from 'react';
import { Card, Avatar, Row, Col, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  birthDate: string;
  bloodType: string;
  allergies: string[];
  medicalHistory: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  phone,
  avatarUrl,
  birthDate,
  bloodType,
  allergies,
  medicalHistory,
}) => {
  return (
    <Card style={{ width: 400, margin: '20px auto' }}>
      <Row justify="center">
        <Col>
          <Avatar size={100} src={avatarUrl} />
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Title level={3}>{name}</Title>
          <Text>{email}</Text>
          <br />
          <Text>{phone}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text strong>Data de Nascimento:</Text>
          <p>{birthDate}</p>
        </Col>
        <Col span={12}>
          <Text strong>Tipo Sanguíneo:</Text>
          <p>{bloodType}</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text strong>Alergias:</Text>
          <p>{allergies ? allergies.join(', ') : 'Nenhuma alergia registrada.'}</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text strong>Histórico Médico:</Text>
          <p>{medicalHistory}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProfile;
