import React from 'react';

import { useState, useEffect } from  'react';
import { Table, TableHead,  TableCell, TableRow,  TableBody, Button, styled } from '@mui/material';
import { getUsers, deleteUsers } from '../services/api';
import { Link } from 'react-router-dom';

const StyledTable  = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #FFFFFF;
  }
`;

const TRow = styled(TableRow)`
  & > td{
    font-size: 18px
  }
`;



const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [])

  const deleteUserData =  async (id) => {
    await  deleteUsers(id);
    getAllUsers();
  }

  const getAllUsers = async () => {
    let response =  await getUsers();
    setUsers(response.data);
  }

  return (
    <div>
        <br/> <br/> <br/>
        <h1> All Users </h1>
    </div>
    
  )
}

export default AllUsers