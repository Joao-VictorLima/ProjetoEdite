import React, { useState } from 'react';
import { Menu, Input } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="feed">
                <Link to="/feed">Feed</Link>
            </Menu.Item>
            <Menu.Item key="search">
                <Search placeholder="Search users or posts" style={{ width: 200 }} />
            </Menu.Item>
            {isLoggedIn ? (
                <Menu.Item key="logout" onClick={handleLoginLogout}>
                    Logout
                </Menu.Item>
            ) : (
                <Menu.Item key="login" onClick={handleLoginLogout}>
                    Login
                </Menu.Item>
            )}
        </Menu>
    );
};

export default Navbar;