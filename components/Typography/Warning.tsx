import React from "react";
// nodejs library to set properties for components
// @material-ui/core components
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// core components
import styles from "../../styles/jss/nextjs-material-kit/components/typographyStyle";
import { ReactChildrenProps } from "../../types/global";

const useStyles = makeStyles((theme: Theme) =>
  createStyles(
    styles
  )
);

export default function Warning(props: ReactChildrenProps) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
}
