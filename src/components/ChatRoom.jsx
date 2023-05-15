import React, {useState, useEffect} from "react";
import {Box, IconButton, Input, Stack, Typography} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';



export default function ChatRoom(){

    const ChatRoomStyles = {
        titleBox:{
            height:'120px',
            width:'100%',
            backgroundColor:'#C080C0',
            display:'flex', 
            flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center',
           

        },

        chattingBox:{
            height:'380px',
            width:'98%',
            display:'flex',
            flexDirection:'column',
            justifyContent:"flex-start",
            alignItems:'flex-start', 
            p:'10px 0',
            gap:'10px',
            overflowY:'auto'
           


        },

        sendingBox:{
            height:'100px',
            width:'100%',
            backgroundColor:'#C080C0',
            display:'flex', 
            flexDirection:'row',
            justifyContent:"space-evenly",
            alignItems:'center',
        },

        messageBox:{
            maxWidth:'300px',
            borderRadius:'30px',
            backgroundColor:'#F1F3F5',
            p:'10px'
        }

        
    }

    const inputStyle = {
        sx: {
          width:'400px',
          borderRadius: "20px",
          backgroundColor: "#F1F3F5",
          textAlign: "left",
          p: "15px",
        },
      };

       const [message, setMessage] = useState('');
       const [list, setList] = useState([]);
       
       useEffect(() => {
        const storedList = localStorage.getItem('myList');
        if (storedList) {
          setList(JSON.parse(storedList));
        }
      }, []);

       function handelSend(e){
        e.preventDefault();
        const newList = [...list, message];
        localStorage.setItem('myList', JSON.stringify(newList));
        setList(newList);
        setMessage('');
       }

    return(
        
        <Stack direction='column' width='70%' height='100%'  justifyContent="center" alignItems='center' p={0} m={0}>
            <Box sx={ChatRoomStyles.titleBox}>
                <Box sx={{height:'70px', width:'70px', borderRadius:'50%', backgroundColor:'#fff', ml:'40px'}}></Box>
                <Typography fontSize='48px' color='#fff' pr='40px'>Room 1</Typography>
            </Box> 
            <Box sx={ChatRoomStyles.chattingBox}>
                {list.map((item, index) => <Box sx={ChatRoomStyles.messageBox}><Typography key={index} fontSize='16px'>{item} </Typography></Box>)}
            </Box>
            <Box sx={ChatRoomStyles.sendingBox}>
            <AddIcon sx={{color:"#fff", fontSize:"38px"}} />
            <EmojiEmotionsIcon sx={{color:"#fff", fontSize:"38px"}}/>
            <Input
              id=""
              placeholder="Add a message....."
              type="text"
              inputProps={inputStyle}
              disableUnderline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <IconButton onClick={handelSend}>
                <SendIcon sx={{color:"#fff", fontSize:"38px"}}/>
            </IconButton>
            </Box>
        </Stack>
    
        
    )
}