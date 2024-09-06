import React from "react";
import {UserContainer} from "../../container/user/UserContainer.tsx";
import {UserContainerProvider} from "../../container/user/context/UserContainerProvider.tsx";
import {UserCardList} from "./card/UserCardList.tsx";

interface Props {
}

export const User: React.FC<React.PropsWithChildren<Props>> = props => {
    return (
        <UserContainerProvider>
            <UserContainer>
                <UserCardList/>
            </UserContainer>
        </UserContainerProvider>
    );
};

