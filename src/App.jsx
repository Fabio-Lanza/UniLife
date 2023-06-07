import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCities from "./pages/AllCities/AllCities";
import CityDetails from "./pages/CityDetails/CityDetails";
import HomeDetailsPage from './pages/HomeDetailsPage/HomeDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allCities" element={<AllCities />} />
        <Route path="/homeDetails/:detailsId" element={<HomeDetailsPage />} />
        <Route path="/cityDetails/:cityId" element={<CityDetails />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
