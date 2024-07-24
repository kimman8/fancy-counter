import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

function CountButtons({ onPlus, onMinus }) {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" onClick={onMinus} />
      </button>
      <button className="count-btn">
        <PlusIcon className="count-btn-icon" onClick={onPlus} />
      </button>
    </div>
  );
}

export default CountButtons;
