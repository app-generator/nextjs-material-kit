import React, { ReactNode } from "react";
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button, { ButtonTypeMap } from "@material-ui/core/Button";

// core components

import buttonStyle from "../../styles/jss/nextjs-material-kit/components/buttonStyle";

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle,
}));

const RegularButton = React.forwardRef((props: RegularButtonProp, ref: any) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Button {...rest} ref={ref} classes={{ root: btnClasses }}>
      {children}
    </Button>
  );
});

export interface RegularButtonProp {
  color:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "rose"
    | "white"
    | "facebook"
    | "twitter"
    | "google"
    | "github"
    | "transparent";
  size?: "sm" | "lg";
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children: ReactNode;
  className?: string;
}

export default RegularButton;
