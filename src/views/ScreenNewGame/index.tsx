import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";
import Buttons from "../../shared/components/Buttons";
import ContainerChoice from "../../shared/components/ContainerChoice";

interface IScreenNewGame { }
const ScreenNewGame: FC<IScreenNewGame> = () => {
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
            <ContainerChoice />
            <Buttons />
        </Box>
    )
}

export default ScreenNewGame