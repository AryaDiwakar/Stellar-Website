import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Whoops404 from './pages/Whoops404';
import Newsletter from './pages/Newsletter';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Background from './components/Background';

function App() {
  return (
    <div className='body'>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/newsletter' element={<Newsletter />} />    
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/events' element={<Events />} />
          <Route path='*' element={<Whoops404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
