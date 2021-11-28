import React, { useContext } from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ThemeContext from "@theme/ThemeContext";

const FeatureList = [
  {
    title: "Focus on your state",
    Svg: require("../../static/img/magnifying-glass.svg").default,
    DarkSvg: require("../../static/img/magnifying-glass-dark.svg").default,
    description: (
      <>
        Focus on slices of your state, read and update them easily even if
        deeply nested.
      </>
    ),
  },
  {
    title: "Composable",
    Svg: require("../../static/img/puzzle-piece.svg").default,
    DarkSvg: require("../../static/img/puzzle-piece-dark.svg").default,
    description: (
      <>
        Derive new state access from previous ones and pass them down your
        component hierarchy.
      </>
    ),
  },
  {
    title: "Typesafe",
    Svg: require("../../static/img/typescript.svg").default,
    DarkSvg: require("../../static/img/typescript-dark.svg").default,
    description: <>Typesafe and nullsafe paths with full auto-completion.</>,
  },
  {
    title: "Reactish",
    Svg: require("../../static/img/react.svg").default,
    DarkSvg: require("../../static/img/react-dark.svg").default,
    description: <>Sticks to modern React's style and principles.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="col">
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(({ Svg, DarkSvg, ...props }, idx) => (
            <Feature key={idx} Svg={isDarkTheme ? DarkSvg : Svg} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
