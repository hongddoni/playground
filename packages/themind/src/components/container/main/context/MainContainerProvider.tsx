import {createContext, useCallback} from "react";
import {useMainInitialize} from "../hooks/useMainInitialize.ts";

interface States {
    cards: number[];
    addCard: (card: number) => void;
}

interface Props {
    children: React.ReactNode;
}

export const MainContainerProvider = (props: Props) => {
    const {cards, setCards} = useMainInitialize();

    const addCard = useCallback((card: number) => {
        setCards([...cards, card]);
    }, [cards, setCards]);

    return (
        <MainContainerContext.Provider value={{addCard, cards}}>
            {props.children}
        </MainContainerContext.Provider>
    )
}

export const MainContainerContext = createContext<States | undefined>(undefined!);