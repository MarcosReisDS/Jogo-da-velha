import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Contexts, { IGeneralContext, IPlayer } from './shared/contexts';
import Router from './shared/router';

interface IApp { }
const App: FC<IApp> = () => {

  const navigate = useNavigate()
  const [playerOne, setPlayerOne] = useState<IPlayer>({
    myChoice: null,
    choices: []
  })
  const [playerTwo, setPlayerTwo] = useState<IPlayer>({
    myChoice: null,
    choices: []
  })
  const [contexts, setContexts] = useState<IGeneralContext>({
    choices: {
      myChoice: "cheese"
    }
  })
  const [currentUser, setCurrentUser] = useState<"p1" | "p2">("p1")


  const handleChoice = (myChoice: "cheese" | "circle") => {
    setContexts({
      ...contexts,
      choices: {
        myChoice: myChoice
      }
    })
  }

  const gameScreen = (gameScreen: string) => {
    navigate(gameScreen)
  }

  const verify = () => {

  }

  return (
    <Contexts.Provider value={{
      contexts,
      setContexts,
      handleChoice,
      gameScreen,
      playerOne,
      playerTwo,
      setPlayerOne,
      setPlayerTwo,
      currentUser,
      setCurrentUser
    }}>
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
    </Contexts.Provider>
  )
}

export default App;
