import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  by?: "chars" | "words" | "lines";
  trigger?: "scroll" | "load";
};

export function SplitReveal({
  as: Tag = "h2",
  children,
  className,
}: Props) {
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}
