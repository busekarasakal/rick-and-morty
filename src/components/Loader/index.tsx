import spinner from '../../assets/spinner.gif';

export function Loader() {
  return (
    <div className='flex justify-center items-center align-middle lg:w-screen lg:h-screen lg:pt-0 w-24 h-24 pt-4'>
      <img src={spinner} alt='spinner' className='lg:w-36 lg:h-36 w-24 h-24 rounded-full lg:rounded-none' />
    </div>
  );
}