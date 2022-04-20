import { Route, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import HomePage from '../HomePage/HomePage';
import DriversPage from '../DriversPage/DriversPage';
import CarsPage from '../CarsPage/CarsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.scss';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="drivers/*" element={<DriversPage />} />
        <Route path="cars*" element={<CarsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
