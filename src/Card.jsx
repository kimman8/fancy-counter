import Count from './Count';
import CountButtons from './CountButtons';
import ResetButton from './ResetButton';
import Title from './Title';
import { useState } from 'react';

export default function Card() {
  const [number, setNumber] = useState(0);
  const handlePlusClick = () => {
    setNumber((prev) => prev + 1);
  };
  const handleMinusClick = () => {
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
      <CountButtons onPlus={handlePlusClick} onMinus={handleMinusClick} />
    </div>
  );
}
