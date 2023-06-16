import React, { useState } from 'react';
import { Divider, List, Typography } from 'antd';
import './Compliant.css'
const Complaint= () => {
     const [data, setData] = useState([
    {
      complaint: 'Sample complaint 1',
      date: '29-05-2023',
      time: '10:30 AM'
    },
    {
      complaint: 'Sample complaint 2',
      date: '20-05-2023',
      time: '2:45 PM'
    }
  ]);
  
  const addComplaint = (complaint) => {
    const currentDate = new Date();
    const newComplaint = {
      complaint: complaint,
      date: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString()
    };

    setData([...data, newComplaint]);
  };

  return (
    <>
      <Divider className="my-divider" orientation="left">Complaint Cell</Divider>
      <List
        header={<div>Complaint Management</div>}
      
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="my-list-item">
            <Typography.Text mark>{item.date} {item.time}</Typography.Text> {item.complaint}
          </List.Item>
        )}
      />
    </>
  );
};

export default Complaint;