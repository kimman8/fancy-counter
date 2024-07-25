import CountButton from './CountButton';

function ButtonContainer({ onPlus, onMinus }) {
  return (
    <div className="button-container">
      <CountButton type="plus" onPlus={onPlus} />
      <CountButton type="minus" onMinus={onMinus} />
    </div>
  );
}

export default ButtonContainer;
