import { FC } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ScreenGame from "../../views/ScreenGame";
import ScreenNewGame from "../../views/ScreenNewGame";
import NoScreen from "../../views/ScreenNewGame/NoScreen";
import EndGame from "../components/EndGame";

interface IRouter { }
const Router: FC<IRouter> = () => {
    const navigate = useNavigate()
    return (
        <Routes>
            <Route path="/novojogo" element={<ScreenNewGame />} />
            <Route path="/jogo/cpu" element={<ScreenGame />} />
            <Route path="/jogo/player" element={<ScreenGame />} />
            <Route path="*" element={<NoScreen/>}  />
        </Routes>
    )
}

export default Router