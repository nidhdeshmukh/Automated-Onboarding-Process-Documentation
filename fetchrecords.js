import React, { useEffect } from 'react';
import { fetchRecords as dbFetchRecords } from './db'; // Adjust the path if necessary

const fetchRecords = () => {
  dbFetchRecords();
};

export default fetchRecords;
