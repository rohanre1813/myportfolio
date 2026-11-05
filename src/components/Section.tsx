import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  index?: string;
  subtitle?: string;
}

export function Section({ id, className = '', children, title, index, subtitle }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16 border-b border-border/40 pb-6"
          >
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-wider text-primary uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{index || `// ${id.toUpperCase()}`}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg text-muted-foreground font-normal max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
