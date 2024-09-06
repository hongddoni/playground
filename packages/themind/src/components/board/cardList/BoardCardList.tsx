import React from "react";
import {useBoardCardList} from "../hooks/useBoardCardList.ts";
import {Card} from "../../card/Card.tsx";
import s from "./boardCardList.module.scss";
import {BoardCardWrap} from "./BoardCardWrap.tsx";

interface Props {
}

export const BoardCardList: React.FC<React.PropsWithChildren<Props>> = props => {
    const {cards, ref, zIndex, countUpZIndex} = useBoardCardList();

    return (
        <div className={s.cardList} ref={ref}>
            {cards?.map(card =>
                <BoardCardWrap key={card} zIndex={zIndex}>
                    <Card number={card}/>
                </BoardCardWrap>
            )}
        </div>
    );
};
