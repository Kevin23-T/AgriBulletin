import React, { useState } from 'react';
import { PhoneOutlined, MessageOutlined, NotificationOutlined} from '@ant-design/icons';
import { Divider, Input, Checkbox, Button, Radio } from 'antd';
import Complaints from '../Complaint/Complaint'
import  './Admin.css';
const Admin = () => {
  const [message, setMessage] = useState('');
  const [automatedCall, setAutomatedCall] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [notificationUpdate, setNotificationUpdate] = useState(false);
  const [dragAndDropContent, setDragAndDropContent] = useState('');
  const [schemeOption, setSchemeOption] = useState('update');
  const [schemeDetails, setSchemeDetails] = useState('');
  const [members, setMembers] = useState([]);
  const [viewComplaints, setViewComplaints] = useState(false);

  const handleMakeChanges = () => {
    if (automatedCall) {
      console.log('Trigger automated call');
      // Perform automated call functionality
    }

    if (messageSent) {
      console.log('Send message:', message);
      // Send the message
    }

    if (notificationUpdate) {
      console.log('Update notification');
      // Perform notification update
    }

    if (dragAndDropContent !== '') {
      console.log('Drag and drop content:', dragAndDropContent);
      // Handle drag and drop content
    }
  };

  const handleClearInput = () => {
    setSchemeDetails('');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDragAndDropContent(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSchemeOptionChange = (e) => {
    setSchemeOption(e.target.value);
  };

  const handleSchemeSubmit = () => {
    if (schemeOption === 'update') {
      console.log('Update existing scheme:', schemeDetails);
      // Update existing scheme logic
    } else if (schemeOption === 'add') {
      console.log('Add new scheme:', schemeDetails);
      // Add new scheme logic
    }
  };

  const handleAddMember = () => {
    const newMember = { name: 'John Doe', age: 25 }; // Replace with actual member details
    setMembers([...members, newMember]);
    console.log('New member added:', newMember);
  };

  const handleToggleComplaints = () => {
    setViewComplaints((prevState) => !prevState);
  };

  return (
    
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <Divider className="section-divider">Notification Update</Divider>
      <div className="notification-update">
        <p>Drag and drop audio file here or enter text :</p>
        <Input.TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />

        <Checkbox
          checked={notificationUpdate}
          onChange={() => setNotificationUpdate(!notificationUpdate)}
          className="notification-checkbox"
        >
          <NotificationOutlined />
          Update Notification
        </Checkbox>

        <Checkbox
          checked={automatedCall}
          onChange={() => setAutomatedCall(!automatedCall)}
          className="notification-checkbox"
        >
          <PhoneOutlined />
          Automated Call
        </Checkbox>

        <Checkbox
          checked={messageSent}
          onChange={() => setMessageSent(!messageSent)}
          className="notification-checkbox"
        >
          <MessageOutlined />
          Message Sent
        </Checkbox>

        <Button type="primary" onClick={handleMakeChanges} className="action-button">
          Make Changes
        </Button>
        <Button type='primary' onClick={() => setMessage('')} className="action-button">Clear</Button>
      </div>

      <Divider className="section-divider">Update Scheme</Divider>
      <div className="update-scheme">
        <Input.TextArea
          value={schemeDetails}
          onChange={(e) => setSchemeDetails(e.target.value)}
          placeholder="Enter scheme details"
        />

        <Radio.Group onChange={handleSchemeOptionChange} value={schemeOption}>
          <Radio value="update">Update Scheme</Radio>
          <Radio value="add">Add Scheme</Radio>
        </Radio.Group>

        <Button type="primary" onClick={handleSchemeSubmit} className="action-button">
          Submit
        </Button>
        <Button type='primary' onClick={handleClearInput} className="action-button">Clear</Button>
      </div>

      <Divider className="section-divider">More Functionalities</Divider>
      <div className="more-functionalities">
        <Button onClick={handleToggleComplaints} className="functionality-button">
          {viewComplaints ? 'Close Complaints' : 'View Complaints'}
        </Button>
        <Button onClick={handleAddMember} className="functionality-button">Add New Member</Button>
      </div>

      {viewComplaints && <Complaints />}

      <footer className="footer">AgriBulletIn</footer>
    </div>
  );
};

export default Admin;

















