import React, { memo } from "react";
import styles from "./Title.module.scss";

const Title = memo(({ text }) => {
  return <h3 className={styles.title}>{text}</h3>;
});

export default Title;
