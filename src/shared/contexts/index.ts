import { Dispatch, SetStateAction, createContext } from "react";

interface IChoices {
    myChoice: "cheese" | "circle" | null;
}

export interface IPlayer extends IChoices {
    choices: number[]
}

export interface IGeneralContext {
    choices: IChoices;
}

export interface IContext {
    contexts: IGeneralContext;
    playerOne: IPlayer
    playerTwo: IPlayer
    currentUser: "p1" | "p2"
    setCurrentUser: Dispatch<SetStateAction<"p1" | "p2">>
    setPlayerOne: Dispatch<SetStateAction<IPlayer>>;
    setPlayerTwo: Dispatch<SetStateAction<IPlayer>>;
    setContexts: Dispatch<SetStateAction<IGeneralContext>>;
    handleChoice: (myChoice: "cheese" | "circle") => void;
    gameScreen: (gameScreen: string) => void
}

const Contexts = createContext<IContext | {}>({});

export default Contexts