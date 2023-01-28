import { CardType } from '../../types/card.types';
import { Card } from '../Card';

export function CardList({ image, title, description, status, type }: CardType) {
  return (
    <div className='flex justify-center lg:w-5/12 lg:h-56 lg:m-5'>
      <Card image={image} title={title} description={description} status={status} type={type}/>
    </div>
  );
}