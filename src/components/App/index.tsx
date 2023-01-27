import { HomePage } from '../../pages/HomePage';
import { Pagination } from '../Pagination';

export function App() {
  return (
    <div className='bg-zinc-800 lg:p-20'>
      <HomePage />
      <Pagination />
    </div>
  );
}