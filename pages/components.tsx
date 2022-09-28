import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import Parallax from "../components/Parallax/Parallax";
// sections for this page
import SectionNavbars from "../pages-sections/Components-Sections/SectionNavbars";
import SectionBasics from "../pages-sections/Components-Sections/SectionBasics";
import SectionTabs from "../pages-sections/Components-Sections/SectionTabs";
import SectionPills from "../pages-sections/Components-Sections/SectionPills";
import SectionNotifications from "../pages-sections/Components-Sections/SectionNotifications";
import SectionTypography from "../pages-sections/Components-Sections/SectionTypography";
import SectionJavascript from "../pages-sections/Components-Sections/SectionJavascript";
import SectionCarousel from "../pages-sections/Components-Sections/SectionCarousel";
import SectionCompletedExamples from "../pages-sections/Components-Sections/SectionCompletedExamples";
import SectionLogin from "../pages-sections/Components-Sections/SectionLogin";
import SectionExamples from "../pages-sections/Components-Sections/SectionExamples";
import SectionDownload from "../pages-sections/Components-Sections/SectionDownload";

import styles from "../styles/jss/nextjs-material-kit/pages/components";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}
