import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file);
    }

    try {
      await axios.post('http://localhost:3000/api/upload', formData);
      fetchRecords();
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/records');
      setRecords(response.data.records);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>File Upload</h1>
      <Form>
        <Form.Group controlId="formFile">
          <Form.Label>Upload Files</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleUpload}>Upload</Button>
      </Form>
      <h2 className="mt-5">Existing Records</h2>
      <Form.Control
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-3"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{record.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FileUpload;
