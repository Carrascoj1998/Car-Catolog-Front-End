import {Route, Routes,} from "react-router-dom";
import HomePage from "./pages/Home";
import VehiclesPage from "./pages/Vehicle";
import FavoritesPage from "./pages/Favorites";
import ManageVehiclesPage from "./pages/ManageVehicles";
import Layout from "./componets/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/addVehicles" element={<VehiclesPage />} />
        <Route path= "/manageVehicles" element={<ManageVehiclesPage/>} />
        <Route path= "/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
