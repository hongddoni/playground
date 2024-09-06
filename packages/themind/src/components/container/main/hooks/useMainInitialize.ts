import {useMemo, useState} from "react";

export const useMainInitialize = () => {
    const numberingCards = useMemo(() => new Array(100).fill(0).map((_, i) => i + 1), []);
    const [cards, setCards] = useState(numberingCards);

    return {
        cards,
        setCards
    }
}