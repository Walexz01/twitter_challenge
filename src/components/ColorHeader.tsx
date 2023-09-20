interface Props {
  className: string;
  text: string;
  colored_text?: string;
}
const ColorHeader = ({ className, colored_text, text }: Props) => {
  return (
    <h2 className={`text_colored ${className}`}>
      {text} <br />
      {colored_text && <span>{colored_text}</span>}
    </h2>
  );
};

export default ColorHeader;
