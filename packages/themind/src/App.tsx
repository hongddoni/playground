import {Card} from "./components/card/Card.tsx";
import {ChatButton} from "./components/chat/ChatButton.tsx";
import {MainContainer} from "./components/container/main/MainContainer.tsx";
import {User} from "./components/user/User.tsx";
import {BoardContainer} from "./components/container/board/BoardContainer.tsx";
import {MainContainerProvider} from "./components/container/main/context/MainContainerProvider.tsx";

function App() {

    return (
        <MainContainerProvider>
            <MainContainer>
                <BoardContainer>
                    <Card/>
                    <ChatButton/>
                </BoardContainer>
                <User/>
            </MainContainer>
        </MainContainerProvider>
    )
}

export default App
