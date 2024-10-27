import { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';


import './App.css';

function App() {

    return (
        <Layout style={{ minHeight: '100vh', minWidth: '100vw'}}>
          <Layout>
            <Layout.Content style={{ padding: '20px' }}>
              <Outlet />
            </Layout.Content>
          </Layout>
        </Layout>
      );
};

export default App;