import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { NewPlate } from "../pages/NewPlate"
import { PlateDetails } from "../pages/PlateDetails"
import { EditPlate } from "../pages/EditPlate"
import { Favorites } from "../pages/Favorites"
import { Orders } from "../pages/Orders";
import { OrderDetails } from "../pages/OrderDetails";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewPlate />} />
            <Route path="/preview/:id" element={<PlateDetails />} />
            <Route path="/edit/:id" element={<EditPlate />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
    )
}