import { ButtonType } from '../../types/button.types';

export function Button({ text, hoverColor = 'blue', onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent hover:bg-${hoverColor}-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-${hoverColor}-500 hover:border-transparent rounded`}>
      {text}
    </button>
  );
}