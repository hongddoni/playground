import {useUserContext} from "../../../container/user/hooks/useUserContext.ts";

export const useUserCards = () => {
    const context = useUserContext();

    return {
        cards: context?.cards,
    }
}