import { Box, Drawer, Grid, IconButton, Tooltip, Stack, Typography, TextField, Button, Backdrop } from '@mui/material';
import React, { lazy, memo, Suspense, useEffect, useState } from 'react'
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Menu as MenuIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Done as DoneIcon,
  Edit as EditIcon
} from '@mui/icons-material'
import { bgGradient, matBlack } from '../constants/color';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Samplechats } from '../constants/SampleData';
import AvatarCard from '../components/shared/AvatarCard';
import { Link } from '../components/styles/StyledComponents';


const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"))
const AddMemberDialog = lazy(() => import("../components/dialogs/AddMemberDialog"))



const Groups = () => {
  const chatId = useSearchParams()[0].get("group")

  console.log(chatId)
  const myGroups = Samplechats.filter((chat) => chat.groupChat === true);


  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setconfirmDeleteDialog] = useState(false);
  const [members, setMembers] = useState([]);
  const isAddMember = false;


  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
    console.log("menu opened")
  }

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    console.log("group name updated")
    // updateGroup("Updating Group Name...", {
    //   chatId,
    //   name: groupNameUpdatedValue,
    // });
  };

  const navigateBack = () => {
    navigate('/')
  }

  const openConfirmDeleteHandler = () => {
    setconfirmDeleteDialog(true);
  }

  const closeConfirmDeleteHandler = () => {
    setconfirmDeleteDialog(false)
  }

  const openAddMemberHandler = () => {

  }

  const deleteHandler = () => {
    deleteGroup("Deleting Group...", chatId);
    closeConfirmDeleteHandler();
    navigate("/groups");
  };

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);

    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const Iconbtn = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  )

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName} >
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton

            onClick={() => setIsEdit(true)}
          >
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  )

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );


  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block"
          },
        }}
        sm={4}
        bgcolor={"#e9ecf3af"}
      >
        <GroupList myGroups={myGroups} chatId={myGroups._id} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem"
        }}
      >
        {Iconbtn}

        {/* Group Details */}
        {
          groupName &&
          (
            <>
              {GroupName}

              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant='body1'
              >
                members
              </Typography>

              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem",
                }}
                spacing={"2rem"}
                bgcolor={"bisque"}
                height={"50vh"}
                overflow={"auto"}>

                {/* Members */}

                {/* {isLoadingRemoveMember ? (
                  <CircularProgress />
                ) : (
                  members.map((i) => (
                    <UserItem
                      user={i}
                      key={i._id}
                      isAdded
                      styling={{
                        boxShadow: "0 0 0.5rem  rgba(0,0,0,0.2)",
                        padding: "1rem 2rem",
                        borderRadius: "1rem",
                      }}
                      handler={removeMemberHandler}
                    />
                  ))
                )} */}
              </Stack>
              {ButtonGroup}
            </>
          )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog chatId={chatId} />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList w={"50vw"} myGroups={myGroups} chatId={chatId} />
      </Drawer>
    </Grid>
  )
}

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack
    width={w}
    sx={{
      backgroundImage: bgGradient,
      height: "100vh",
      overflow: "auto",
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
)

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
