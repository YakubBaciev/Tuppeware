import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Skeleton.module.scss";

const Skeleton = () => (
  <ContentLoader
    className={styles.root}
    speed={2}
    width={280}
    height={420}
    viewBox="0 0 280 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="14" y="46" rx="0" ry="0" width="19" height="0" />
    <rect x="-1" y="-26" rx="0" ry="0" width="316" height="266" />
    <rect x="0" y="265" rx="0" ry="0" width="286" height="45" />
    <rect x="3" y="331" rx="0" ry="0" width="83" height="27" />
    <rect x="26" y="376" rx="20" ry="20" width="237" height="41" />
  </ContentLoader>
);

export default Skeleton;
