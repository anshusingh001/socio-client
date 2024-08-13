import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { skyblue } from '../../constants/color'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotifyIcons } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import iconimg from '../../assets/letter-s.png'

const Search = lazy(() => import("../specific/Search"))
const Notifications = lazy(() => import("../specific/Notifications"))
const NewGroup = lazy(() => import("../specific/NewGroup"))



const Header = () => {

  const [issearch, setIssearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);


  const navigate = useNavigate();

  const openSearch = () => {
    setIssearch((prev) => !prev);
  }

  const handleMobile = () => {
    setIsMobile((prev) => !prev)
  }
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev)

  }
  const NavigatetoGroup = () => {
    navigate('/groups')
  }
  const logoutHandler = () => {
    console.log("logout successfully")
  }
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"10vh"}>
        <AppBar position='static' sx={{
          bgcolor: skyblue,
        }}>

          <Toolbar>
          <div>
        <img height={50} width={50} src={iconimg} alt=''></img>
      </div>
            <Typography
              variant='h5'
              sx={{
                display: { xs: "none", sm: "block" },
              }}>
              ocio
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}>
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{
              flexGrow: 1
            }} />

            <Box>

              <Tooltip title="search">
                <IconButton color='inherit' size='large' onClick={openSearch}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Notifications">
                <IconButton color='inherit' size='large' onClick={openNotification}>
                  <NotifyIcons />
                </IconButton>
              </Tooltip>


              <Tooltip title="New Group">
                <IconButton color='inherit' size='large' onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Manage Groups">
                <IconButton color='inherit' size='large' onClick={NavigatetoGroup}>
                  <GroupIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Logout">
                <IconButton color='inherit' size='large' onClick={logoutHandler}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>



            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {issearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>

      )
      }

      {
        isNotification && (
          <Suspense fallback={<Backdrop open />}>
            <Notifications />
          </Suspense>

        )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open />}>
            <NewGroup />
          </Suspense>

        )
      }
    </>
  )
}

export default Header
