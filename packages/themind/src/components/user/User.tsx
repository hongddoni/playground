import React from "react";
import {UserContainer} from "../container/user/UserContainer.tsx";

interface Props {
}

export const User: React.FC<React.PropsWithChildren<Props>> = props => {
    return (
        <UserContainer>
            유저
        </UserContainer>
    );
};

