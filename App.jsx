import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Reservation } from './pages/Reservation';
import { Locations } from './pages/Locations';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-brand-cream text-brand-brown font-sans">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
