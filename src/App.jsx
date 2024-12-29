import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
import PetDetails from './pages/pet/PetDetails';
import MyPets from './pages/pet/MyPets';
import EditPet from './pages/pet/EditPet';

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/meus-pets" element={<MyPets />} />
          <Route path="/editar-pet/:id" element={<EditPet />} /> {/* Rota para editar */}
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
