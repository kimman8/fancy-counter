import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

function CountButton({ onPlus, onMinus, type, locked }) {
  return (
    <button
      disabled={locked}
      className="count-btn"
      onClick={type === 'plus' ? onPlus : onMinus}
    >
      {type === 'plus' ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

export default CountButton;
