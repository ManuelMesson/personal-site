interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  id?: string;
}

export default function Section({ title, children, className = '', containerClassName = '', fullWidth = false, id }: SectionProps) {
  const sectionClassName = ['section', className].filter(Boolean).join(' ');
  const innerClassName = [fullWidth ? '' : 'site-wrap', containerClassName].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClassName}>
      <div className={innerClassName}>
        {title && <h2 className="mb-5">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
