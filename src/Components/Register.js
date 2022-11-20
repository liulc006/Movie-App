import React, { useState } from 'react';
import { register } from '../store';
import { useDispatch } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';

const Register = ()=> {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const registerButton = (ev)=> {
    ev.preventDefault();
    dispatch(register(credentials));
  };
  return (
    <div style={{display:'flex',justifyContent: 'center', alignItems: 'flex-start' ,minHeight: '80%'}}>
      <Box sx={{maxWidth: 300, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Register</h2>
        <form>
          <TextField id="username" label="Username" variant="outlined" 
            value = { credentials.username }
            onChange = { onChange }
            name = 'username'
            sx={{margin:'5px'}}
          />
          <TextField id="password" label="Password" variant="outlined" 
            value={ credentials.password }
            onChange = { onChange }
            name = 'password'
            sx={{margin:'5px'}}
          />
          <Button variant='contained' onClick={registerButton} sx={{margin:'5px'}}>Register</Button>
        </form>
      </Box>
    </div>
  );
};

export default Register;
