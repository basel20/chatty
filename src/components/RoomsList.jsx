import React from "react";
import {Box, Stack, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';



export default function RoomsList(){

    const Rooms=["Room 1", "Room 2", "Room 3"]

    const RoomStyles = {
        titleBox:{
           
        },

        RoomBox:{
            backgroundColor:'#730073',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            gap:'3px'
        },

        
    }

    const RoomsList = Rooms.map(room =>
        <Box sx={{backgroundColor:'#e6e6e6', height:'60px'}}>
            <Typography fontSize='28px' color='#000' pl='10px' pt='10px'>{room}</Typography>
        </Box>)
   

    return(
        <Stack direction='column' width='30%' height='620px'  justifyContent="flex-start" alignItems='center' backgroundColor='#730073'>
            <Box sx={RoomStyles.titleBox}>
                <Typography fontSize='48px'color='#fff'>Room List</Typography>
            </Box>
            <Box sx={RoomStyles.RoomBox}>
                {RoomsList}
                <Box sx={{backgroundColor:'#c080c0', height:'60px', display:'flex', alignItems:'center', gap:'10px',pl:'10px'}}>
                    <AddIcon sx={{color:"#000", fontSize:"28px"}} />
                    <Typography fontSize='28px' color='#000' >Add Room  </Typography>
            </Box>
            </Box>
            
        </Stack>
    )
}