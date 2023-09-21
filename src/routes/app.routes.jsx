import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { NewPlate } from "../pages/NewPlate"
import { PlateDetails } from "../pages/PlateDetails"
import { EditPlate } from "../pages/EditPlate"

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewPlate />} />
            <Route path="/preview/:id" element={<PlateDetails />} />
            <Route path="/edit/:id" element={<EditPlate />} />
        </Routes>
    )
}