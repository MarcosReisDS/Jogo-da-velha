import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";
import Icons from "../../shared/components/Icons";
import PickBox from "../../shared/components/PickBox";


interface IScreenGame { }
const ScreenGame: FC<IScreenGame> = () => {
    return (
        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", flexDirection: "column" }}>
            <Grid
                container
                spacing={0.5}
                mb={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
                <Grid item>
                    <Box
                        style={{
                            width: "100px",
                            height: "40px",
                            backgroundColor: "#1f3540",
                            borderRadius: "10px",
                            display: "flex",
                            gap: "8px",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "190px",
                            boxShadow: "0px 3px 0px rgba(0,0,0,.2)"
                        }}>
                        <BsXLg size="15" color="#fff" /><p style={{color: "#fff", fontSize: "10px"}}>TURNO</p>
                    </Box>
                </Grid>
            </Grid>
            <PickBox />
        </Box>
    )
}

export default ScreenGame