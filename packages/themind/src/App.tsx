import {ChatButton} from "./components/chat/ChatButton.tsx";
import {MainContainer} from "./components/container/main/MainContainer.tsx";
import {User} from "./components/user/view/User.tsx";
import {BoardContainer} from "./components/container/board/BoardContainer.tsx";
import {MainContainerProvider} from "./components/container/main/context/MainContainerProvider.tsx";
import {BoardCardList} from "./components/board/cardList/BoardCardList.tsx";

function App() {

    return (
        <MainContainerProvider>
            <MainContainer>
                <BoardContainer>
                    <BoardCardList/>
                </BoardContainer>
                <User/>
            </MainContainer>
            <ChatButton/>
        </MainContainerProvider>
    )
}

export default App
