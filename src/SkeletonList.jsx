import React from "react";
import styles from "./Skeleton.module.scss";

function SkeletonList() {
  return (
    <tr>
      <td>
        <span className={styles.skeletonLine} style={{ width: "55%" }}></span>
      </td>
      <td>
        <span className={styles.skeletonLine} style={{ width: "50%" }}></span>
      </td>
      <td>
        <span className={styles.skeletonLine} style={{ width: "65%" }}></span>
      </td>
      <td>
        <span className={styles.skeletonLine} style={{ width: "75%" }}></span>
      </td>
      <td>
        <span className={styles.skeletonLine} style={{ width: "55%" }}></span>
      </td>
      <td>
        <span className={styles.skeletonLine} style={{ width: "60%" }}></span>
      </td>
      <td>
        <span
          className={styles.skeletonLine}
          style={{ width: "50%", height: "22px" }}
        ></span>
      </td>
    </tr>
  );
}

export default SkeletonList;
