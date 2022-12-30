import * as React from "react";
import { useState } from "react";
import Sidebar from "../../sidebar";
import { Divider, Layout, Menu, Modal, Popconfirm, Popover, Table, theme } from "antd";
import Link from "next/link";
import { Button } from "antd";
import { Input, Space } from 'antd';
import { AudioOutlined, DeleteOutlined, EditFilled, ExclamationCircleFilled, MoreOutlined } from '@ant-design/icons';
export interface UserDataTypes {
  address: String,
  email: String,
  id: Number,
  name: String,
  status: String,
}

export default function UserListing() {
  const { Header, Sider, Content } = Layout;
  const onSearch = (value: string) => console.log(value);
  const { confirm } = Modal;

  const [userData, setUserData] = useState<UserDataTypes | any>('')
  const [allData, setAllData] = useState('');
  const [NewData ,setNewData]=useState<UserDataTypes | any>('')
  const handleDelete = () => {
    confirm({
      title: 'Are you sure delete this User?',
      icon: <ExclamationCircleFilled />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK', userData);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const content = (
    <div>
      <p style={{ textAlign: "center", cursor: "pointer" }}><Link href={`/admin/editUser/${userData.id}`}><EditFilled style={{ color: "#4096ff" }} /></Link></p>
      <p style={{ textAlign: "center", cursor: "pointer" }}> <DeleteOutlined style={{ color: "red" }} onClick={handleDelete} /></p>
      <Link href={`/admin/viewUser/${userData.id}`}> <Button style={{ textAlign: "center" }} type="link">View</Button></Link>
    </div>
  );
  const { Search } = Input;
  const data = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.com",
      status: "Active",
      address: "London Kulas Light Apt. 556",
      phone: 1 - 7799 - 736 - 89931,
      website: "https://tekolio.com/",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.org",
      status: "Active",
      address: "New York Victor Plains Suite 879",
      phone: 99199 - 692 - 65935,
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      status: "Active",
      address: "Douglas Extension uitzipcod",
      phone: 1 - 463 - 123 - 4447,
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      status: "Active",
      address: "Hoeger Mal Apt. 692 South Elvis",
      phone: 493 - 1799 - 9623,
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.com",
      status: "Inactive",
      address: "Skiles ks Suit 51 Roscoevi",
      phone: 254 - 954 - 1289,
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.net",
      status: "Active",
      address: "Norberto Crossing",
      phone: 1 - 477 - 935 - 8478 - 64399,
      website: "ola.org",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.com",
      status: "Active",
      address: "Rex Tra Suite 2 Howemouth",
      phone: 2199 - 9967 - 6132,
      website: "elvis.io",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.net",
      status: "Active",
      address: "Ellsworth mit Sui 729 Aliyavi",
      phone: 493.6943 - 1499,
      website: "jacynthe.com",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.org",
      status: "Active",
      address: "Dayna Park uitzipcod",
      phone: 976 - 6794 - 412996,
      website: "conrad.com",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.com",
      status: "Active",
      address: "Kattie Turnpike Suite 198 Lebsackbury",
      phone: 9924 - 648 - 38994,
      website: "ambrose.net",
    }, {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.org",
      status: "Active",
      address: "New York Victor Plains Suite 879",
      phone: 99199 - 692 - 65935,
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      status: "Active",
      address: "Douglas Extension uitzipcod",
      phone: 1 - 463 - 123 - 4447,
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      status: "Active",
      address: "Hoeger Mal Apt. 692 South Elvis",
      phone: 493 - 1799 - 9623,
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.com",
      status: "Active",
      address: "Skiles ks Suit 51 Roscoevi",
      phone: 254 - 954 - 1289,
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.net",
      status: "Active",
      address: "Norberto Crossing",
      phone: 1 - 477 - 935 - 8478 - 64399,
      website: "ola.org",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.com",
      status: "Active",
      address: "Rex Tra Suite 2 Howemouth",
      phone: 2199 - 9967 - 6132,
      website: "elvis.io",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.net",
      status: "Active",
      address: "Ellsworth mit Sui 729 Aliyavi",
      phone: 493.6943 - 1499,
      website: "jacynthe.com",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.org",
      status: "Active",
      address: "Dayna Park uitzipcod",
      phone: 976 - 6794 - 412996,
      website: "conrad.com",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.com",
      status: "Active",
      address: "Kattie Turnpike Suite 198 Lebsackbury",
      phone: 9924 - 648 - 38994,
      website: "ambrose.net",
    },
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.com",
      status: "Active",
      address: "London Kulas Light Apt. 556",
      phone: 1 - 7799 - 736 - 89931,
      website: "https://tekolio.com/",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.org",
      status: "Active",
      address: "New York Victor Plains Suite 879",
      phone: 99199 - 692 - 65935,
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      status: "Active",
      address: "Douglas Extension uitzipcod",
      phone: 1 - 463 - 123 - 4447,
      website: "ramiro.info",
    },

  ]
  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "action",
      title: "Actions",
      render: (record: any) => {
        return (
          <>
            <Popover content={content} title="" trigger="click">
              <MoreOutlined
                onClick={() => handleClick(record)}
              />
            </Popover>
          </>
        );
      },
    },
  ]
  const handleClick = (data: any) => {
    setUserData(data)
  }
  const handleAlldata = () => {
    if (allData === "1") {
      setAllData("")
    } else {
      setAllData("1")
    }
  }
  const handleInactive =()=>{
  let newdata= data.filter((ae)=>{
    return ae.status==="Inactive"
   })
   setNewData(newdata)
  }
  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <div className="backflex">
          {/* <Divider/> */}
          <div className="btndivsearch">
            <Button onClick={handleAlldata} type="link">All({data.length})</Button>
            <Button type="link" >Active(5)</Button>
            <Button type="link" onClick={handleInactive}>inActive(5)</Button>
          </div>
          <div className="positioncss">
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
          </div>
          <div style={{ marginLeft: "50%" }}>
            <Link href="/admin/addUser"><Button>Add User</Button></Link>
          </div>
        </div>
        <div className="mainuserdiv">
          {
            allData === "1" ?
              <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: data.length, total: data.length, showSizeChanger: true }}
              />
              :
              <Table
                dataSource={data}
                columns={columns}
                pagination={{ total: data.length, showSizeChanger: true }}
              />
          }

        </div>
      </Content>
    </Layout>
  );
}
// pageSize:data.length,