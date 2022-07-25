import { Box, Grid, Button } from "@mui/material";
import { FC } from "react";

interface IButtons { }
const Buttons: FC<IButtons> = () => {
    return (
        <Grid
            container
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Grid item mt={4} sx={{ width: "100%" }}>
                <Box>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#f2b237",
                            width: "100%",
                            height: "50px",
                            color: "black",
                            borderRadius: "10px",
                            boxShadow: "inset 0px -5px 0px rgba(0,0,0,.2)"
                        }} 
                    >
                        NOVO JOGO(CPU)
                    </Button>
                </Box>
            </Grid>
            <Grid item mt={2} sx={{ width: "100%" }}>
                <Box>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#2fc4bbf5",
                            width: "100%",
                            height: "50px",
                            color: "black",
                            borderRadius: "10px",
                            boxShadow: "inset 0px -5px 0px rgba(0,0,0,.2)"
                        }}
                    >
                        NOVO JOGO(AMIGO)
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Buttons