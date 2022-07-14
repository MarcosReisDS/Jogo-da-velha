import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import YourChoice from "../components/YourChoice";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <div>
            <Routes>
                <Route path="/novojogo" element={<YourChoice />} />
            </Routes>
        </div>
    )
}

export default Router