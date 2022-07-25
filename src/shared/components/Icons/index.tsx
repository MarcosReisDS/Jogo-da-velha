import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";

interface IIcons { }
const Icons: FC<IIcons> = () => {
    return (
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
    )
}

export default Icons