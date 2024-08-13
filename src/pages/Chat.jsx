import React, { Fragment, useRef, useState } from 'react'
import AppLayout from '../components/layouts/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { grayColor } from '../constants/color';
import { InputBox } from '../components/styles/StyledComponents';
import { Send as SendIcon, AttachFile as AttachFileIcon } from '@mui/icons-material'
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/SampleData';
import MessageComponent from '../components/shared/MessageComponent';


const user = {
  _id: "1",
  name: "Anshu Singh"
}


const Chat = () => {

  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();

  }

  const handleFileOpen = () => {

  }

  const messageOnChange = (e) => {
    setMessage(e.target.value)
  }

  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"#f5ebeb"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >

        {
          sampleMessage.map((message) => (
            <MessageComponent key={message._id} message={message} user={user} />
          ))
        }
      </Stack>
      <form
        style={{
          height: "10%",
        }}
        onSubmit={submitHandler}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
            onClick={handleFileOpen}

          >
            <AttachFileIcon />
          </IconButton>

          <InputBox
            placeholder="Type Message Here..."
            value={message}
            onChange={messageOnChange}
          />

          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              bgcolor: "#318bda",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "#1c16ce",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </Fragment>
  )
}

export default AppLayout()(Chat);
