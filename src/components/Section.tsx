import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
}

export function Section({ id, className = '', children, title }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
            <div className="w-12 h-1.5 bg-primary mt-4 rounded-full"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
