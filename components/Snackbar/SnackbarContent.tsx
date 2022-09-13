import React from "react";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components

import styles from "../../styles/jss/nextjs-material-kit/components/snackbarContentStyle";

const useStyles = makeStyles(styles);

export default function SnackbarContent(props: SnackbarContentProps) {
  const { message, color, close, icon } = props;
  const classes = useStyles();
  var action:JSX.Element[] = [];
  const closeAlert = () => {
    setAlert(null);
  };
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={closeAlert}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  let snackIcon: JSX.Element|null = null;
  if(icon) {
    if(typeof icon === 'string') {
      snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
    } else {
      snackIcon = <props.icon className={classes.icon} />;
    }
  }
  const [alert, setAlert] = React.useState(
    <Snack
      message={
        <div>
          {snackIcon}
          {message}
          {close !== undefined ? action : null}
        </div>
      }
      classes={{
        root: classes.root + " " + classes[color],
        message: classes.message + " " + classes.container,
      }}
    />
  );
  return alert;
}

export interface SnackbarContentProps {
  message: Element | Element[];
  color: "info" | "success" | "warning" | "danger" | "primary";
  close: boolean;
  icon?: string | Element;
}
