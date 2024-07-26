import { ResetIcon } from '@radix-ui/react-icons';

function ResetButton({ onReset }) {
  return (
    <button className="reset-btn" onClick={onReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
