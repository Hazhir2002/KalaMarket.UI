interface InputProps {
  type: string;
  name?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value: any;
  onChange: (e: any) => void;
}

export default function Input({
  type,
  name,
  placeholder,
  className,
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={`rounded-2xl bg-gray-200 px-4 ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
