import { HomePage } from '../../pages/HomePage';
import { Pagination } from '../Pagination';

export function App() {
  return (
    <div className='lg:p-20 bg-zinc-800'>
      <HomePage />
      <Pagination />
    </div>
  );
}