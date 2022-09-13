import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../styles/jss/nextjs-material-kit/components/cardHeaderStyle";
import { CardHeaderTypeMap } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CardHeader(props: CardHeaderProps) {
  const classes = useStyles();
  const { className, children, color, plain, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
  });
  if(className !== undefined)
    cardHeaderClasses.concat(" " + className);
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  className?: string;
  color: "warning" | "success" | "danger" | "info" | "primary" | "rose";
  plain?: boolean;
  children: ReactNode;
}
