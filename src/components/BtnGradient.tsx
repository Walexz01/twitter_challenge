interface Props {
  className: string;
  label: string;
}
const BtnGradient = ({ className, label }: Props) => {
  return <button className={`${className} btn`}>{label}</button>;
};

export default BtnGradient;
