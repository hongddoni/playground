import React from "react";
import s from "./boardCardWrap.module.scss"

interface Props{
    zIndex: number;
}

export const BoardCardWrap: React.FC<React.PropsWithChildren<Props>> = props => {
    const {zIndex, children} = props;
    return (
        <div className={s.cardWrap} style={{zIndex}}>
            {children}
        </div>
    );
};
