import { Box, Grid } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Buttons from "../../shared/components/Buttons";
import ContainerChoice from "../../shared/components/ContainerChoice";
import Contexts, { IContext } from "../../shared/contexts";

interface IScreenNewGame { }
const ScreenNewGame: FC<IScreenNewGame> = () => {

    const { contexts, handleChoice, gameScreen, playerOne, playerTwo } = useContext(Contexts) as IContext

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <Grid
                container
                spacing={0.5}
                mb={5}
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Grid item>
                    <Box>
                        <BsXLg size="20" style={{ color: "#32c4c1" }} />
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <BsRecordCircleFill size="20" style={{ color: "#f3b237" }} />
                    </Box>
                </Grid>
            </Grid>
            <ContainerChoice
                selectedCheese={() => handleChoice("cheese")}
                selectedCircle={() => handleChoice("circle")}
            />
            <Buttons cpu={() => gameScreen("/jogo/cpu")} player={() => gameScreen("/jogo/player")}/>
        </Box>
    )
}

export default ScreenNewGame