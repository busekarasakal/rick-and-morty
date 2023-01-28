import { STATUS } from '../../types/status.enum';

export function StatusBadge({ status, type }) {
  const statusColor = (status) => {
    return status === STATUS.Alive ? 'bg-lime-500' : status === STATUS.Dead ? 'bg-black' : 'bg-slate-200';
  };

  return (
    <div className='items-center pt-3 pb-3'>
      <div className={`inline-flex w-2 h-2 mr-1.5 rounded-full ${statusColor(status)}`}></div>
      <span className='text-white'>{STATUS[status]} - {type}</span>
    </div>
  );
}