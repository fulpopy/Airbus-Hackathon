import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import LinkButton from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import validation from './signInValidation';
import axios from 'axios';
import logo from '../Images/logo.jpg';
import bgImg from '../Images/bgImg.jpg'
import { useAuth } from '../../Auth';
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const handleChange = event =>{
    setValue(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
        const err = validation(value);
        setErrors(err);
        if(err.email === "" && err.password === ""){
          await axios.post('http://localhost:8081/login', value)
          .then(res => {
            if(res.data){
              login(res.data);
              console.log(res.data)
              const {email} = value;
              if(email[0] === "admin@company.com") navigate('/user/admin');
              else{
                navigate('/user/dashboard');
              }
              
            }
            else{
              alert("No record exists");
            }
              
          })
          .catch(err => console.log(err))
        }
  };

  return (
    <Box
    class="candles"
    style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    height: "100vh",
    // margin: "0"
  }}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.67)',
            // marginTop: 8,
            padding:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ width: 150, height: 150, marginBottom: 7}} src={logo}/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={errors.email ? errors.email : ''}
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={errors.password ? errors.password : ''}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item>
                <Link to="/signup">
                <LinkButton variant="body2">
                  {"Don't have an account? Sign Up"}
                </LinkButton>
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  </Box>
    
  );
}