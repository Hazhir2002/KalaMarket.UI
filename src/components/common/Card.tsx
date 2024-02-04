interface CardProps {
  children: any;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={`rounded-2xl bg-white ${className}`}>{children}</div>;
}
