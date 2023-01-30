import { useMemo } from 'react';
import { StatusType } from '../../types/status.type';

enum STATUS {
  'Alive' = 'Alive',
  'Dead' = 'Dead',
  'unknown' = 'Unknown'
}

const getStatusColor = (status: string) => {
  switch (status) {
    case STATUS.Alive:
      return 'bg-lime-500';
    case STATUS.Dead:
      return 'bg-black';
    default:
      return 'bg-slate-200';
  }
};

export function StatusBadge({ status, type }: StatusType) {
  const statusColor = useMemo(() => getStatusColor(status), [status]);

  return (
    <div className='items-center pt-3 pb-3'>
      <div className={`inline-flex w-2 h-2 mr-1.5 rounded-full ${statusColor}`}></div>
      <span className='text-white'>{status?.toUpperCase()}</span>
      <div className='text-white my-2'>{type}</div>
    </div>
  );
}