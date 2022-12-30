import React, { useState } from "react";
import Sidebar from "../../sidebar";
import { Divider, Layout, Menu, Modal, Popconfirm, Popover, Table, theme } from "antd";
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { ArrowLeftOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import Link from "next/link";

export interface IAppProps { }

export default function AddUser(props: IAppProps) {
    const { Option } = Select;
    const { Header, Sider, Content } = Layout;
  const { confirm } = Modal;
   
    const handleDelete = () => {
        confirm({
          title: 'Are you sure delete this User?',
          icon: <ExclamationCircleFilled />,
          content: '',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    return (
        <Layout>
            <Sidebar />
            <Content className="contentcss">
                <div className="editusercss">
                    <div className="backflex">
                        <Link href="/admin/userListing">
                            <Button
                                type="text"
                                className=" backbtnn"
                                icon={<ArrowLeftOutlined />}
                            >
                                Back
                            </Button>
                        </Link>
                        <h2 className="textuser1">User Details</h2>
                    </div>
                    <div className="viewDetail" style={{ border: "5px solid #d5d5d5", marginTop: "33px", letterSpacing: "1px" }}>
                        <div className="formatcss">

                            <div className="backflex" >
                                <h3 className="h3view">Name :</h3>
                                <p className="h3pagaview">Varun Patidar</p>
                            </div>
                            <br />
                            <div className="backflex">

                                <h3 className="h3view">Email :</h3>
                                <p className="h3pagaview">varun123@gmail.com</p>
                            </div>
                            <br />
                            <div className="backflex">

                                <h3 className="h3view">Status :</h3>
                                <p className="h3pagaview">Active</p>
                            </div>
                            <div className="btneditt">
                            <Link href={`/admin/editUser/${"1"}`}><Button type="primary">Edit</Button></Link>&emsp;&emsp;&emsp;
                                <Button danger onClick={handleDelete}>Delete</Button>

                            </div>
                        </div>
                    </div>
                </div>

            </Content>
        </Layout >
    );
}
