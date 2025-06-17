import React, { useEffect, useState } from 'react';
import { Card, Avatar, Row, Col, Typography, Divider } from 'antd';
import { UserProfileProps } from '../../interfaces/user/UserProfile'; 

const { Title, Text } = Typography;

const UserProfile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileProps | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileData: UserProfileProps = {
        name: "João Victor",
        email: "joaovictor@example.com",
        phone: "(11) 99999-9999",
        avatarUrl: "https://example.com/avatar.jpg",
        birthDate: "1990-01-01",
        bloodType: "O+",
        allergies: ['Poeira', 'Amendoim'],
        medicalHistory: "Nenhum histórico médico relevante."
      };
      setUserProfile(profileData);
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <p>Carregando...</p>;
  }

  return (
    <Card style={{ width: 400, margin: '20px auto' }}>
      <Row justify="center">
        <Col>
          <Avatar size={100} src={userProfile.avatarUrl} />
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Title level={3}>{userProfile.name}</Title>
          <Text>{userProfile.email}</Text>
          <br />
          <Text>{userProfile.phone}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text strong>Data de Nascimento:</Text>
          <p>{userProfile.birthDate}</p>
        </Col>
        <Col span={12}>
          <Text strong>Tipo Sanguíneo:</Text>
          <p>{userProfile.bloodType}</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text strong>Alergias:</Text>
          <p>{userProfile.allergies ? userProfile.allergies.join(', ') : 'Nenhuma alergia registrada.'}</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text strong>Histórico Médico:</Text>
          <p>{userProfile.medicalHistory}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProfile;
