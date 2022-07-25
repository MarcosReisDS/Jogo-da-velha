import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ScreenGame from "../../views/ScreenGame";
import ScreenNewGame from "../../views/ScreenNewGame";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/novojogo" element={<ScreenNewGame />} />
            <Route path="/jogo" element={<ScreenGame />} />
        </Routes>
    )
}

export default Router