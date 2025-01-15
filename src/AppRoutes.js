import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './Component/Navbar';
import Home from './pages/Home';
import StockFormularios from './Component/StockFormularios';
import StockAseo from './Component/StockAseo';
import StockEscritorio from './Component/StockEscritorio';


const AppRoutes = () => {

  return (
    <Router>
      < NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/StockAseo" element={<StockAseo/>} />
        <Route path="/StockFormularios" element={<StockFormularios/>} />
        <Route path="/StockEscritorio" element={<StockEscritorio/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
