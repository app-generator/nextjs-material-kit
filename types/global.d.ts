import { ReactNode } from "react";

export interface ReactChildrenProps {
  children: ReactNode | ReactNode[];
}
export interface ReactClassChildrenProps extends ReactChildrenProps {
  className?: string;
}

