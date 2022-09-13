import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

import styles from "../../styles/jss/nextjs-material-kit/components/navPillsStyle";

const useStyles = makeStyles(styles);

export default function NavPills(props: NavPillsProps) {
  const [active, setActive] = React.useState<number>(props.active || 0);
  const handleChange = (event, active: number) => {
    setActive(active);
  };
  const handleChangeIndex = (index: number) => {
    setActive(index);
  };
  const classes = useStyles();
  const { tabs, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color || "primary"],
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      {tabs.map((prop, key) => {
        if (key !== active) {
          return null;
        } else {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        }
      })}
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

export interface NavPillsProps {
  // index of the default active pill
  active?: number;
  tabs: {
      tabButton: string;
      tabIcon: any;
      tabContent: ReactNode;
    }[];
  color?: 
    | "primary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "rose";
  horizontal?: {
    tabsGrid: any;
    contentGrid: any;
  },
  alignCenter?: boolean
};
