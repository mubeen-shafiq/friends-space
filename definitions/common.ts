import { ReactNode } from "react";

export type ChildrenPropsType = Readonly<{ children: ReactNode }>;
export type ErrorPagePropsType = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;
