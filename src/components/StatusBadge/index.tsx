import { STATUS } from '../../types/status.enum';
import { StatusType } from '../../types/status.type';

export function StatusBadge({ status, type }: StatusType) {
  const statusColor = (status: string) => {
    return status === STATUS.Alive ? 'bg-lime-500' : status === STATUS.Dead ? 'bg-black' : 'bg-slate-200';
  };
  const isValidType = type !== 'unknown';

  return (
    <div className='items-center pt-3 pb-3'>
      <div className={`inline-flex w-2 h-2 mr-1.5 rounded-full ${statusColor(status as string)}`}></div>
      <span className='text-white'>{status?.toUpperCase()}</span>
      {type && isValidType && <div className='text-white my-2'>{type}</div>}
    </div>
  );
}