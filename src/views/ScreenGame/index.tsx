import { Box, Grid } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import { BsRecordCircleFill, BsXLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PickBox from "../../shared/components/PickBox";
import Contexts, { IContext } from "../../shared/contexts";


interface IScreenGame { }
const ScreenGame: FC<IScreenGame> = () => {

    const { playerOne, playerTwo, currentUser } = useContext(Contexts) as IContext

    const navigate = useNavigate()

    const playerOneIcon = playerOne.myChoice === "cheese" ? <BsXLg size="15" color="#fff" /> :  <BsRecordCircleFill size="15" style={{ color: "#fff" }} />
    const playerTwoIcon = playerTwo.myChoice === "cheese" ? <BsXLg size="15" color="#fff" /> :  <BsRecordCircleFill size="15" style={{ color: "#fff" }} />

    useEffect(() => {
        if (playerOne.myChoice === null) {
            navigate("/novojogo")
        }
    }, [])

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
                            {currentUser === "p1" ? playerOneIcon : playerTwoIcon }
                        <p style={{ color: "#fff", fontSize: "10px" }}>TURNO</p>
                    </Box>
                </Grid>
            </Grid>
            <PickBox />
        </Box>
    )
}

export default ScreenGame