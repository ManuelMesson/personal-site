// components/Section.tsx
interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export default function Section({ 
  title, 
  children, 
  className = '', 
  containerClassName = '',
  fullWidth = false
}: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className={`${fullWidth ? '' : 'container'} ${containerClassName}`}>
        {title && <h2 className="mb-8">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
