import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalenderIcon } from '@mui/icons-material';
import moment from 'moment'

const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white"
                }}
            />
            <ProfileCard 
            heading={"Bio"} 
            text={"hello from ehw8e we79d wed9ehd edgaud dgiugd dguidga this is me and who are you and the dd8eyde dgesd"} 
            />

            <ProfileCard 
            heading={"UserName"} 
            text={"Anshusingh0411"} 
            Icon={<UserNameIcon />} 
            />

            <ProfileCard 
            heading={"Name"} 
            text={"Anshu Singh"} 
            Icon={<FaceIcon />} 
            />

            <ProfileCard 
            heading={"Joined"} 
            text={moment("20240328", "YYYYMMDD").fromNow()} 
            Icon={<CalenderIcon />} 
            />


        </Stack>
    )
}

const ProfileCard = ({ text, Icon, heading }) => (
    <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}
    >

        {Icon && Icon}

        <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography color={"grey"} variant='caption'>
                {heading}
            </Typography>
        </Stack>
    </Stack>
)

export default Profile
