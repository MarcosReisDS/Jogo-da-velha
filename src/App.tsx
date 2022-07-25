import { Box } from '@mui/material';
import { FC } from 'react';
import './App.css';
import Router from './shared/router';

interface IApp { }
const App: FC<IApp> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      
        <Router />
    </Box>
  )
}

export default App;
