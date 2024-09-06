import {createContext, useCallback, useState} from "react";

interface StateManager {
    cards: number[];
    addCard: (card: number) => void;
}

interface Props {
    children: React.ReactNode;
}

export const MainContainerProvider = (props: Props) => {
    const [cards, setCards] = useState<number[]>([]);

    const addCard = useCallback((card: number) => {
        setCards([...cards, card]);
    }, [cards]);

    return (
        <MainContainerContext.Provider value={{addCard, cards}}>
            {props.children}
        </MainContainerContext.Provider>
    )
}

export const MainContainerContext = createContext<StateManager | undefined>(undefined);