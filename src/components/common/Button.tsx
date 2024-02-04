interface ButtonProps {
  children: any;
  className?: string;
  onClick: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl bg-accent text-center px-8 py-1 text-white ${className}`}
    >
      {children}
    </button>
  );
}
