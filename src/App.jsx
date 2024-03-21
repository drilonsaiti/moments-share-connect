import {QueryClient} from "@tanstack/react-query";
import Login from "./pages/Login.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomeAdmin from "./features/homeadmin/HomeAdmin.jsx";
import HomeClient from "./features/homeclient/HomeClient.jsx";
import Home from "./pages/Home.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0
        }

    }
});

function App() {

    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="client" element={<HomeClient/>}/>
                    <Route index element={<Navigate replace to={"/home"}/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
