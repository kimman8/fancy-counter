import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import CountButton from './CountButton';
import Title from './Title';
import { useState, useEffect } from 'react';

export default function Card() {
  const [number, setNumber] = useState(0);
  const locked = number === 5 ? true : false;
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [number]);
  const handlePlusClick = (e) => {
    if (!locked) {
      setNumber((prev) => prev + 1);
    }
    e.currentTarget.blur();
  };
  const handleMinusClick = (e) => {
    if (!locked && number > 0) {
      setNumber((prev) => prev - 1);
    }
    e.currentTarget.blur();
  };
  const handleReset = (e) => {
    setNumber(0);
    e.currentTarget.blur();
  };
  const handleKeyDown = (e) => {
    if (e.code === 'Space') {
      handlePlusClick();
    }
  };
  return (
    <div className={`card ${locked && 'card--limit'}`}>
      <Title locked={locked} />
      <Count number={number} />
      <ResetButton onReset={handleReset} locked={locked} />
      <ButtonContainer>
        <CountButton type="plus" onPlus={handlePlusClick} locked={locked} />
        <CountButton type="minus" onMinus={handleMinusClick} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
