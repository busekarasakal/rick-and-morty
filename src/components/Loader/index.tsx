import spinner from '../../assets/spinner.gif';

export function Loader() {
  return (
    <div className='relative self-center lg:w-48 lg:h-full lg:pt-0 w-24 h-24 pt-4'>
      <img src={spinner} alt='spinner' className='absolute object-cover w-full h-full rounded-full lg:rounded-none' />
    </div>
  );
}