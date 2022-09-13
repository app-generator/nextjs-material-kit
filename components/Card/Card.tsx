import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../styles/jss/nextjs-material-kit/components/cardStyle";

const useStyles = makeStyles(styles);

export default function Card(props: CardProps) {
  const classes = useStyles();
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
  });
  if(className !== undefined) {
    cardClasses.concat(" " + className)
  }
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

export interface CardProps {
  className?: string;
  plain?: boolean;
  carousel?: boolean;
  children: ReactNode;
};