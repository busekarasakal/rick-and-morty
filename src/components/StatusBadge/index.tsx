import { STATUS } from '../../types/status.enums';
import './styles.scss';

export function StatusBadge({ status, type }) {
  return (
    <div className='items-center pt-3 pb-3'>
      <div className={`status-${STATUS[status].toLowerCase()}`}></div>
      <span className='text-white'>{STATUS[status]} - {type}</span>
    </div>
  );
}