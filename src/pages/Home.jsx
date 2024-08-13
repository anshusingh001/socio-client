import React from 'react'
import AppLayout from '../components/layouts/AppLayout'
import { Box, Stack, Typography } from '@mui/material';
import { grayColor } from '../constants/color';
import chatimg from '../assets/texting.png'

const Home = () => {
  return (
    <Stack marginTop={"1rem"}>
      <div>
        <img height={500} width={700} src={chatimg} alt=''></img>
      </div>
      <Box height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
    </Stack>
   
    
  )
}

export default AppLayout()(Home);
