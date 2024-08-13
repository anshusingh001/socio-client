import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import {Search as SearchIcon} from '@mui/icons-material'
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/SampleData';



const Search = () => {

  const [search,setsearch]=useState('');

  let isLoadingSendFriendRequest=false;
  const [users,setUsers]=useState(sampleUsers);

  const addFriendHandler=(id)=>{
    console.log(id);
  }

  const changeHandler=(e)=>{
    setsearch(e.target.value);
    console.log(search);
  }
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
        label=""
        name='search'
        value={search}
        onChange={changeHandler}
        variant="outlined"
        size='small'
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
        /> 

        <List>
         {
          users.map((user)=>(
           <UserItem 
           user={user} 
           key={user._id} 
           handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}/>
          ))
         }
        </List>


      </Stack>
    </Dialog>
  )
}

export default Search
