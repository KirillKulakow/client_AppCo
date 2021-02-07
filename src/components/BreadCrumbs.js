import React, { memo } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./BreadCrumbs.module.scss";

const BreadCrumbs = memo(() => {
  const { pathname, state } = useLocation();
  console.log(state);
  return (
    <div className={styles.container}>
      <Link className={styles.link} to='/'>
        Main Page
      </Link>
      <span className={styles.delimiter}>&gt;</span>
      <Link
        className={
          pathname === "/users_stat"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
        to='/users_stat'
      >
        User Statistics
      </Link>
      {pathname !== "/users_stat" && (
        <>
          <span className={styles.delimiter}>&gt;</span>
          <Link
            className={`${styles.link} ${styles.active}`}
            to='/user_stats/5'
          >
            {state && state.length > 0 ? `${state[0]} ${state[1]}` : "Unknown"}
          </Link>
        </>
      )}
    </div>
  );
});

export default BreadCrumbs;
