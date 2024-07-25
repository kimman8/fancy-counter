import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import Title from './Title';
import { useState } from 'react';

export default function Card() {
  const [number, setNumber] = useState(0);
  const handlePlusClick = () => {
    setNumber((prev) => prev + 1);
  };
  const handleMinusClick = () => {
    if (number === 0) return;
    setNumber((prev) => prev - 1);
  };
  const handleReset = () => {
    setNumber(0);
  };
  return (
    <div className="card">
      <Title />
      <Count number={number} />
      <ResetButton onReset={handleReset} />
      <ButtonContainer onPlus={handlePlusClick} onMinus={handleMinusClick} />
    </div>
  );
}
