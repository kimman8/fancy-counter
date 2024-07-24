import { ResetIcon } from '@radix-ui/react-icons';

function ResetButton({ onReset }) {
  return (
    <button className="reset-btn">
      <ResetIcon className="reset-btn-icon" onClick={onReset} />
    </button>
  );
}

export default ResetButton;
