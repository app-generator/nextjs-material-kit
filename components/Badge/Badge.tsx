import React, { ReactNode } from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../styles/jss/nextjs-material-kit/components/badgeStyle";

const useStyles = makeStyles(styles);

export type BadgeProps = {
  color?:
    | "primary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "rose"
    | "gray";
  children: ReactNode;
};
export default function Badge(props: BadgeProps) {
  const classes = useStyles();
  const { color, children } = props;
  return (
    <span className={classes.badge + " " + classes[color || "gray"]}>
      {children}
    </span>
  );
}
