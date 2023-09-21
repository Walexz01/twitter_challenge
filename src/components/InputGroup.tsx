interface Props {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
const InputGroup = ({
  label,
  placeholder,
  type = "text",
  id,
  value,
  required = true,
  handleChange,
}: Props) => {
  return (
    <div className="input_group">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(e) => handleChange(e)}
        value={value}
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
