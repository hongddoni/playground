import {useMainContext} from "../../container/main/hooks/useMainContext.ts";
import {useEffect, useRef, useState} from "react";
import {Pos} from "../../chat/type/Pos.ts";

export const useBoardCardList = () => {
    const context = useMainContext();
    const ref = useRef<HTMLDivElement>(null);
    const [leftTop, setLeftTop] = useState<Pos>({x: 0, y: 0});
    const [rightBottom, setRightBottom] = useState<Pos>({x: 0, y: 0});
    const maxWidth = rightBottom.x - leftTop.x;

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setLeftTop({x: rect.left, y: rect.top});
            setRightBottom( { x: rect.right, y: rect.bottom });
        }
    }, []);

    return {
        cards: context?.cards,
        ref,
        maxWidth
    }
}