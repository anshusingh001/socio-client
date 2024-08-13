import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import loginimg from '../assets/login.png'
import { CameraAlt } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
//import {useInputValidation } from '6pp';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [signupformData, setsignupformData] = useState({ fullname: "", bio: "", username: "", password: ""});
  const [loginformData, setloginformData] = useState({ username: "", password: ""});
  

  function changeHandler(e) {
    const { name, value} = e.target;
    setsignupformData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }

    })
  }

  function SignupHandler(e){
    e.preventDefault()
    console.log(signupformData);
  }
  function LoginHandler(e){
    e.preventDefault()
    console.log(formData);
  }

  return (
   
    <Container component={"main"}
      sx={{
        height: '100vh',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        "@media screen and (max-width:800px)": {
          flexDirection: "column",

        },
      }}>
      <div>
        <img height={500} width={700} src={loginimg} alt=''></img>
      </div>
      <Paper
        elevation={4}

        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

        {
          isLogin ?
            (
              <>
                <Typography variant='h5'>Login</Typography>
                <form style={{
                  width: "100%",
                  marginTop: "1rem"
                }}>
                  <TextField
                    required
                    fullWidth
                    label="username"
                    margin='normal'
                    variant='outlined'
                    name='username'
                    value={loginformData.username}
                  />

                  <TextField
                    required
                    fullWidth
                    label="password"
                    margin='normal'
                    variant='outlined'
                    name='password'
                    value={loginformData.password}
                  />

                  <Button
                    sx={{
                      marginTop: '1rem',
                    }}
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth>
                    Login
                  </Button>

                  <Typography textAlign='center' margin={'1rem'}>OR</Typography>
                  <Button
                    sx={{
                      marginTop: '1rem',
                    }}
                    variant='text'
                    fullWidth
                    onClick={() => setIsLogin(false)}>
                    Don't have an Account ? Signup
                  </Button>

                </form>
              </>
            ) : <>
              <Typography variant='h5'>Signup</Typography>
              <form style={{
                width: "100%",
                marginTop: "1rem"
              }}
              onSubmit={SignupHandler}>

                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain "
                  }} />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      bgcolor: "rgba(0,0,0,0.7)", ":hover": {
                        bgcolor: "rgba(255,255,255,0.5)",
                      },

                    }}
                    component="label">
                    <>
                      <CameraAlt />
                      <VisuallyHiddenInput type='file' />
                    </>
                  </IconButton>
                </Stack>


                <TextField
                  required
                  fullWidth
                  label="Name"
                  name='fullname'
                  margin='normal'
                  variant='outlined'
                  value={signupformData.fullname}
                  onChange={changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  name='bio'
                  margin='normal'
                  variant='outlined'
                  value={signupformData.bio}
                  onChange={changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="username"
                  name='username'
                  margin='normal'
                  variant='outlined'
                  value={signupformData.username}
                  onChange={changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="password"
                  name='password'
                  margin='normal'
                  variant='outlined'
                  value={signupformData.password}
                  onChange={changeHandler}
                />

                <Button
                  sx={{
                    marginTop: '1rem',
                  }}
                  variant='contained'
                  color='primary'
                  type='submit'
                  fullWidth
                  >
                  Signup
                </Button>

                <Typography textAlign='center' margin={'1rem'}>OR</Typography>
                <Button
                  sx={{
                    marginTop: '1rem',
                  }}
                  variant='text'
                  fullWidth
                  onClick={() => setIsLogin(true)}>
                  Login Instead
                </Button>

              </form>
            </>
        }

      </Paper>

    </Container>
  
  )
}

export default Login
