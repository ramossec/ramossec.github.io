import * as React from "react";

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className }: SectionProps) {
  return (
    <>
      <section id={title} className={className}>
        {children}
      </section>
    </>
  );
}
