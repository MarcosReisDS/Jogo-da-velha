import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";

interface IContainerChoice { }
const ContainerChoice: FC<IContainerChoice> = () => {
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
                    <p style={{color: "#95acb6"}}>FAÇA SUA ESCOLHA</p>
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
                                border: "none"
                            }}
                        >
                            <BsXLg size="20" style={{ color: "#aabdc6" }} />
                        </ToggleButton>
                        <ToggleButton
                            value="two"
                            style={{
                                width: "160px",
                                height: "50px",
                                backgroundColor: "#a9bfca",
                                border: "none"
                            }}
                        >
                            <BsRecordCircleFill size="20" style={{ color: "#2a3d47" }} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Grid>
            <Grid item mt={3}>
                <Box>
                    <p style={{color: "#425663"}}>LEMBRE-SE X SERÁ O PRIMEIRO</p>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ContainerChoice