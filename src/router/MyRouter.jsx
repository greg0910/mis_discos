import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"

export const MyRouter = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
)
