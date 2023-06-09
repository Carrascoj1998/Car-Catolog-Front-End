import {Route, Routes,} from "react-router-dom";
import HomePage from "./pages/Home";
import VehiclesPage from "./pages/Vehicle";
import FavoritesPage from "./pages/Favorites";
import MainNavBar from "./componets/layout/MainNavBar";
import ManageVehiclesPage from "./pages/ManageVehicles";

function App() {
  return (
    <div>
        <MainNavBar />

      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/addVehicles" element={<VehiclesPage />} />
        <Route path= "/manageVehicles" element={<ManageVehiclesPage/>} />
        <Route path= "/favorites" element={<FavoritesPage />} />


      </Routes>

    </div>
  );
}

export default App;
