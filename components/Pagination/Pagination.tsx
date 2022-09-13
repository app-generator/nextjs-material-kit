import React from "react";
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "../../styles/jss/nextjs-material-kit/components/paginationStyle";

const useStyles = makeStyles(styles);

export default function Pagination(props: PaginationProps) {
  const classes = useStyles();
  const { pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color || "primary"]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick ? (
              <Button onClick={prop.onClick!} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
export interface PaginationProps {
  pages: {
    active: boolean;
    disabled: boolean;
    text: number | "PREV" | "NEXT" | "...";
    onClick?: any;
  }[];
  color: "primary" | "info" | "success" | "warning" | "danger";
}
