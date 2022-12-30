
import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
const { Header, Content, Footer, Sider } = Layout;

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    let location = useRouter();
    const [current, setCurrent] = useState(
        location.pathname === "/" || location.pathname === ""
            ? "/dashboard"
            : location.pathname,
    );
    //or simply use const [current, setCurrent] = useState(location.pathname)        

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    function handleClick(e: any) {
        setCurrent(e.key);
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo" />
            <div className='slidercss'>

            <Menu
                onClick={handleClick}
                mode="vertical"
                selectedKeys={[current]}
                >
                <Link href="/admin/dashboard">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Dashboard
                    </Menu.Item>
                </Link>
                <Link href="/admin/userListing">
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        User Listing
                    </Menu.Item>
                </Link>
                <Link href="/admin/brokerage">
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        Brokerage Listing
                    </Menu.Item>
                </Link>
                <Link href="#">
                    <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                        Agent Listing
                    </Menu.Item>
                </Link>
                <Link href="#">
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        Landlord Listing
                    </Menu.Item>
                </Link>
            </Menu>
                </div>
        </Sider>
    );
};

export default Sidebar;