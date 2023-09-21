interface Props {
  className: string;
  label: string;
  handleClick?: () => void;
}
const BtnGradient = ({ className, label, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick ? () => handleClick() : () => {}}
      className={`${className} btn`}
    >
      {label}
    </button>
  );
};

export default BtnGradient;
