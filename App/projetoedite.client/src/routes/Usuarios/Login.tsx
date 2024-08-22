import React from 'react'
import { useQuery, gql } from '@apollo/client';


// Defina a consulta GraphQL
const GET_USUARIOS = gql`
  query GetUsuarios {
    usuarios {
      id
      login
    }
  }
`;

interface Usuario {
    id: number;
    login: string;
  }

interface GetUsuariosData {
    usuarios: Usuario[];
}

const Login: React.FC = () => {
    // Adicione o tipo para a resposta da consulta
    const { loading, error, data } = useQuery<GetUsuariosData>(GET_USUARIOS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h1>Usuários</h1>
        <ul>
          {data?.usuarios.map(usuario => (
            <li key={usuario.id}>
              {usuario.login}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Login
