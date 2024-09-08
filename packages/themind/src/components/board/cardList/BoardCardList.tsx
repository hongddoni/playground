import React, {useRef} from "react";
import {useBoardCardList} from "../hooks/useBoardCardList.ts";
import {Card} from "../../card/Card.tsx";
import s from "./boardCardList.module.scss";
import {BoardCardWrap} from "./BoardCardWrap.tsx";

interface Props {
}

export const BoardCardList: React.FC<React.PropsWithChildren<Props>> = props => {
    const {cards, ref, maxWidth} = useBoardCardList();
    const childrenRef = useRef(null);

    return (
        <div className={s.cardList} ref={ref}>
            {cards?.map((card, index) =>
                <BoardCardWrap key={card} zIndex={index} x={maxWidth / 35 * index} y={0} ref={childrenRef}>
                    <Card number={card}/>
                </BoardCardWrap>
            )}
        </div>
    );
};
