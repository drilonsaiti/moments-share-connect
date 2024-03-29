import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Login from "./pages/Login.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {DarkModeProvider} from "./context/DarkModeContext.jsx";
import Gallery from "./pages/Gallery.jsx";
import HomeClientPage from "./pages/HomeClientPage.jsx";
import {Toaster} from "react-hot-toast";
import Users from "./pages/Users.jsx";
import TakePhoto from "./pages/TakePhoto.jsx";

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
            <QueryClientProvider client={queryClient}>
                <GlobalStyles/>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Navigate replace to={"/home"}/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="client" element={<HomeClientPage/>}/>
                        <Route path="take-photo" element={<TakePhoto/>}/>
                        <Route path="users" element={<Users/>}/>
                        <Route path="gallery/:bucketId" element={<Gallery/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>

                <Toaster
                    position="top-center"
                    gutter={12}
                    containerStyle={{margin: "8px"}}
                    toastOptions={{
                        success: {
                            duration: 3000,
                        },
                        error: {
                            duration: 5000,
                        },
                        style: {
                            fontSize: "16px",
                            maxWidth: "500px",
                            padding: "16px 24px",
                            backgroundColor: "var(--color-grey-0)",
                            color: "var(--color-grey-700)",
                        },
                    }}
                />
            </QueryClientProvider>
        </DarkModeProvider>
    )
}

export default App
