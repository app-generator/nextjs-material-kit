import React, { ElementType, ReactNode } from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridTypeMap } from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

export interface GridContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const useStyles = makeStyles(styles);

export default function GridContainer(props: GridContainerProps) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}
