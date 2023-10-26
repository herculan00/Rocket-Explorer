import {Routes, Route} from "react-router-dom"

import {New} from "../pages/New"
import {Details} from "../pages/Details"
import {Home} from "../pages/Home"
import {Login} from "../pages/Login"


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}