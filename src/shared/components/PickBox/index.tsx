import { Block } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";
import api from "../../api";
import { winKeys, winOptions } from "../../constants/winOptions";
import Contexts, { IContext } from "../../contexts";
import { conditions } from "../../helpers/conditions";
import { IScoreBoard } from "../../types/scoreboard.interface";
import EndGame from "../EndGame";

interface IPickBox { }
const PickBox: FC<IPickBox> = () => {

    const { playerOne, playerTwo, setPlayerOne, setPlayerTwo, currentUser, setCurrentUser } = useContext(Contexts) as IContext
    const [endgame, setEndgame] = useState<boolean>(false)
    const [you, setYou] = useState<number>(0)
    const [draw, setDraw] = useState<number>(0)
    const [they, setThey] = useState<number>(0)

    const blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    const victory = (myChoices: number[], player: 'playerOne' | 'playerTwo') => {
        if (myChoices.length >= 3) {
            for (let i = 0; i < winKeys.length; i++) {
                const key = winKeys[i]
                const result = winOptions[key].every(number => myChoices.includes(number))
                if (result === false && myChoices.length === 5 && i === winKeys.length - 1) {
                    setDraw(draw + 1)
                    resetChoices()
                    setEndgame(true)
                }
                if (result) {
                    if (player === "playerOne") {
                        setYou(you + 1)
                        resetChoices()
                        setEndgame(true)
                    } else {
                        setThey(they + 1)
                        resetChoices()
                        setEndgame(true)
                    }
                }
            }
        }
    }

    const resetChoices = () => {
        setPlayerTwo({
            ...playerTwo, choices: []
        })
        setPlayerOne({
            ...playerOne, choices: []
        })
        setCurrentUser('p1')
    }

    const handleNewGame = () => {
        setEndgame(false)
    }

    const getScoreBoard = () => {
        api.get({
            property: "scoreboard"
        }).then(res => {
            const you = res.data[0].you
            const draw = res.data[0].draw
            const they = res.data[0].they
            setYou(you)
            setDraw(draw)
            setThey(they)
        })
    }

    const handlePlayerChoice = (choice: number) => {
        if (playerOne.choices.includes(choice) || playerTwo.choices.includes(choice)) {
            alert("Opa")
        } else {
            if (currentUser === "p1") {
                setPlayerOne({ ...playerOne, choices: [...playerOne.choices, choice] })
                victory([...playerOne.choices, choice], 'playerOne')
                setCurrentUser("p2")
            } else {
                setPlayerTwo({ ...playerTwo, choices: [...playerTwo.choices, choice] })
                victory([...playerTwo.choices, choice], 'playerTwo')
                setCurrentUser("p1")
            }
        }
    }

    useEffect(() => {
        getScoreBoard()
    }, [])
    useEffect(() => {
        if (currentUser === 'p2' && window.location.pathname.includes("cpu")) {
            const playersChoices = playerOne.choices.concat(playerTwo.choices)
            const availableChoices = blocks.filter(blockid => !playersChoices.includes(blockid))
            handlePlayerChoice(availableChoices[Math.floor(Math.random() * availableChoices.length)])
        }
    }, [currentUser === "p2" && window.location.pathname.includes("cpu")])



    return (
        <Grid container spacing={2}>
            {endgame && <EndGame playerWin={currentUser === "p1" ? "p2" : "p1"} handleNewGame={handleNewGame} />}
            {blocks.map((blockid, index) => (
                <Grid item xs={4} md={4} sm={4} key={index}>
                    <Box
                        sx={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#1f3540",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 0px rgba(0,0,0,.2)"
                        }}
                        onClick={() => handlePlayerChoice(blockid)}
                    >
                        {playerOne.choices.includes(blockid) && (
                            <>
                                {playerOne.myChoice === "cheese" ? (
                                    <BsXLg size="30" style={{ color: "#32c4c1" }} />
                                ) : (
                                    <BsRecordCircleFill size="30" style={{ color: "#f3b237" }} />
                                )}
                            </>
                        )}
                        {playerTwo.choices.includes(blockid) && (
                            <>
                                {playerTwo.myChoice === "cheese" ? (
                                    <BsXLg size="30" style={{ color: "#32c4c1" }} />
                                ) : (
                                    <BsRecordCircleFill size="30" style={{ color: "#f3b237" }} />
                                )}
                            </>
                        )}
                    </Box>
                </Grid>
            ))}

            <Grid item xs={4} md={4} sm={4}>
                <Box
                    sx={{
                        width: "100px",
                        height: "50px",
                        backgroundColor: "#31c4be",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        flexDirection: "column",
                        boxShadow: "0px 4px 0px rgba(0,0,0,.2)"
                    }}
                >
                    <p>VOCÊ</p>
                    <p>{you}</p>
                </Box>
            </Grid>
            <Grid item xs={4} md={4} sm={4}>
                <Box
                    sx={{
                        width: "100px",
                        height: "50px",
                        backgroundColor: "#a9bec9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        flexDirection: "column",
                        boxShadow: "0px 4px 0px rgba(0,0,0,.2)"
                    }}
                >
                    <p>EMPATE</p>
                    <p>{draw}</p>
                </Box>
            </Grid>
            <Grid item xs={4} md={4} sm={4}>
                <Box
                    sx={{
                        width: "100px",
                        height: "50px",
                        backgroundColor: "#f3b137",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        flexDirection: "column",
                        boxShadow: "0px 4px 0px rgba(0,0,0,.2)"
                    }}
                >
                    <p>ELE</p>
                    <p>{they}</p>
                </Box>
            </Grid>
        </Grid>
    )
}

export default PickBox