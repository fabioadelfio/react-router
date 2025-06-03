import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Posts from './pages/Posts';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Homepage />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/posts' element={<Posts />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
