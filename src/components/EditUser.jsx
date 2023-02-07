import React, {useState, useEffect} from 'react'

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../services/api';

const  initialValue = {
  name : '',
  username : '',
  email :  '',
  phone : ''
}

const  Container = styled(FormGroup)`
  width: 50%;
  margin:  5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
`;




const EditUser = () => {
  const [user, setUser]  = useState(initialValue);
  const {name, username, email, phone} = user;
  const {id}   = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUserDetails =  async() => {
    const response = await getUsers(id);
    setUser(response.data);
  }

  const editUserDetails = async () => {
    // console.log(user);
    await  editUser(id, user);
    navigate('/all');
  }

  const onValueChange = (e) => {    
    setUser({...user, [e.target.name] : e.target.value})
  }


  return (
    <Container>
      <Typography variant="h4"> Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="txtName"> Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"  value={name}  id="txtName" aria-describedby="my-helper-text" />
      </FormControl>

      {/* <FormControl>
        <InputLabel htmlFor="txtUsername"> Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username"  value={username}  id="txtUsername" aria-describedby="my-helper-text" />
      </FormControl> */}

      <FormControl>
        <InputLabel htmlFor="txtUsername"> Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email"  value={email}  id="txtEmail" aria-describedby="my-helper-text" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="txtUsername"> Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone"  value={phone}  id="txtPhone" aria-describedby="my-helper-text" />
      </FormControl>

      <FormControl>
        <Button variant="contained" color="primary" onClick={()=> editUserDetails()}>Edit User</Button>
      </FormControl>
    </Container>
    
  )
}

export default EditUser