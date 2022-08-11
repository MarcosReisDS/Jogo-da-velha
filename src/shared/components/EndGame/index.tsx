import { Box, Button, Grid } from "@mui/material"
import { FC } from "react"
import { BsXLg } from "react-icons/bs"
import { Navigate, useNavigate } from "react-router-dom";

interface IEndGame {
    handleNewGame: () => void;
    playerWin: "p1" | "p2"
}
const EndGame: FC<IEndGame> = ({ handleNewGame, playerWin }) => {

    const navigate = useNavigate()

    return (
        <Box style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0, .5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "0",
            top: "0"
        }}>
            <Grid
                container
                sx={{
                    width: "100%",
                    height: "170px",
                    backgroundColor: "#1f3540",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Grid item>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                        <p style={{ color: "white", marginBottom: "10px" }}>{playerWin === "p1" ? "jogador 01" : "jogador 02"} ganhou!</p>
                        <p style={{ color: "#3dbfb9", fontSize: "25px", display: "flex", gap: "10px" }}><BsXLg size="30" color="#fff" /> Rodada Vencida</p>
                    </Box>
                    <Grid item>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "20px"
                            }}>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "#a9c0ca",
                                    color: "black",
                                    borderRadius: "5px",
                                    boxShadow: "inset 0px -5px 0px rgba(0,0,0,.2)"
                                }}
                                onClick={() => navigate("/novojogo")}
                            >
                                Sair
                            </Button>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "#f2b139",
                                    color: "black",
                                    borderRadius: "5px",
                                    boxShadow: "inset 0px -5px 0px rgba(0,0,0,.2)"
                                }}
                                onClick={handleNewGame}
                            >
                                Próxima rodada
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EndGame