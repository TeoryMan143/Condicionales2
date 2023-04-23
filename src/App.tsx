import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Punto1 from './pages/Punto1';
import Punto2 from './pages/Punto2';
import Punto3 from './pages/Punto3';
import Punto4 from './pages/Punto4';
import Punto5 from './pages/Punto5';
import NotFound from './pages/NotFound';
import Header from './interface/Header';

function App() {
    return (
        <BrowserRouter>
            <div className='bg-amber-100 min-h-screen flex-col'>
                <Header />
                <Routes>
                    <Route path='/' element={<Punto1 />} />
                    <Route path='/punto2' element={<Punto2 />} />
                    <Route path='/punto3' element={<Punto3 />} />
                    <Route path='/punto4' element={<Punto4 />} />
                    <Route path='/punto5' element={<Punto5 />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
