import {QueryClient} from "@tanstack/react-query";
import Login from "./pages/Login.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomeClient from "./features/homeclient/HomeClient.jsx";
import Home from "./pages/Home.jsx";
import HomeUserPage from "./pages/HomeUserPage.jsx";
import {DarkModeProvider} from "./context/DarkModeContext.jsx";
import Grid from "./pages/Grid.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0
        }

    }
});

function App() {

    return (
        <DarkModeProvider>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="client" element={<HomeClient/>}/>
                    <Route path="user" element={<HomeUserPage/>}/>
                    <Route path="grid" element={<Grid/>}/>
                    <Route index element={<Navigate replace to={"/home"}/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>


        </DarkModeProvider>
    )
}

export default App
