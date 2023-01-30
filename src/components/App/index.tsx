import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage';
import { EpisodePage } from '../../pages/EpisodePage';
import { LocationPage } from '../../pages/LocationPage';

export function App() {
  return (
    <div className='bg-zinc-800'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/episode' element={<EpisodePage />} />
          <Route path='/location' element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}