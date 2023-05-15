import ChatRoom from './components/ChatRoom';
import RoomsList from './components/RoomsList';
import './App.css';
import { Stack } from '@mui/material';

function App() {
  return (
    
    <Stack direction='row'>
      <RoomsList/>
      <ChatRoom/>
      
    </Stack>
    
  );
}

export default App;
