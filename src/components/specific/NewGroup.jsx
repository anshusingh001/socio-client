import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import { sampleUsers } from '../../constants/SampleData';
import UserItem from '../shared/UserItem';

const NewGroup = () => {

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [groupName, setgroupName] = useState('')


  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
    prev.includes(id)
      ? prev.filter((currElement) => currElement !== id)
      : [...prev, id]
  );

  };

  console.log(selectedMembers);

  const closeHandler = (id) => {

  };

  const submitHandler = (id) => {

  };





  const changeHandler = (e) => {
    setgroupName(e.target.value);
  }

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>New Groups</DialogTitle>

        <TextField
          label="Group Name"
          value={groupName}
          onChange={changeHandler}
        />

        <Typography variant="body1">Members</Typography>

        <Stack>
          {
            members.map((user) => (
              <UserItem
                user={user}
                key={user._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(user._id)}
                 />
            ))
          }
        </Stack>

        <Stack direction={"row"} marginTop={"1rem"} justifyContent={"space-evenly"}>
          <Button variant='text'
            color='error'
            size='large'
            onClick={closeHandler}>
            Cancel
          </Button>

          <Button
            variant='contained'
            size="large"
            onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
