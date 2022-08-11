import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC, useContext, useState } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";
import { COLORS } from "../../constants/colors";
import Contexts, { IContext } from "../../contexts";

interface IContainerChoice {
    selectedCheese: () => void;
    selectedCircle: () => void;
}
const ContainerChoice: FC<IContainerChoice> = ({ selectedCheese, selectedCircle }) => {

    const { playerOne, setPlayerOne, playerTwo, setPlayerTwo } = useContext(Contexts) as IContext

    const handleChoice = (choice: "cheese" | "circle") => {
        if (choice === "cheese") {
            setPlayerOne({ ...playerOne, myChoice: "cheese" })
            setPlayerTwo({ ...playerTwo, myChoice: "circle" })
        } else {
            setPlayerOne({ ...playerOne, myChoice: "circle" })
            setPlayerTwo({ ...playerTwo, myChoice: "cheese" })
        }
    }
    return (
        <Grid
            container
            sx={{
                width: "400px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                backgroundColor: "#1f3540",
                borderRadius: "20px",
                boxShadow: "0px 5px 0px rgba(0,0,0,.3)"
            }}
        >
            <Grid item mb={3}>
                <Box>
                    <p style={{ color: "#95acb6" }}>FAÇA SUA ESCOLHA</p>
                </Box>
            </Grid>
            <Grid
                item
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#192a32",
                        width: "340px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                    }}
                >
                    <ToggleButtonGroup>
                        <ToggleButton
                            value="one"
                            style={{
                                width: "160px",
                                height: "50px",
                                border: "none",
                                backgroundColor: playerOne.myChoice === "cheese" ? COLORS.SELECTED1 : COLORS.SELECTED2
                            }}
                            onClick={() => handleChoice("cheese")}
                        >
                            <BsXLg size="20" style={{ color: playerOne.myChoice === "cheese" ? COLORS.SELECTED2 : COLORS.SELECTED1 }} />
                        </ToggleButton>
                        <ToggleButton
                            value="two"
                            style={{
                                width: "160px",
                                height: "50px",
                                border: "none",
                                backgroundColor: playerOne.myChoice === "circle" ? COLORS.SELECTED1 : COLORS.SELECTED2
                            }}
                            onClick={() => handleChoice("circle")}
                        >
                            <BsRecordCircleFill size="20" style={{ color: playerOne.myChoice === "circle" ? COLORS.SELECTED2 : COLORS.SELECTED1 }} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Grid>
            <Grid item mt={3}>
                <Box>
                    <p style={{ color: "#425663" }}>LEMBRE-SE X SERÁ O PRIMEIRO</p>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ContainerChoice