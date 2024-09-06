import {useMainContext} from "../../container/main/hooks/useMainContext.ts";
import {useEffect, useRef, useState} from "react";

export const useBoardCardList = () => {
    const context = useMainContext();
    const ref = useRef<HTMLDivElement>(null);
    const [zIndex, setZIndex] = useState(0);

    useEffect(() => {
        if(ref.current) {
            console.log(ref.current.getBoundingClientRect());
        }
    }, []);

    const countUpZIndex = () => {

    }

    return {
        cards: context?.cards,
        ref,
        zIndex,
        countUpZIndex,
        boundaryLeftBottom: {x: ref.current?.getBoundingClientRect().left}
    }
}