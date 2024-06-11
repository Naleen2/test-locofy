import { FunctionComponent } from "react";
import styles from "./Rows1.module.css";

export type Rows1Type = {
  className?: string;
};

const Rows1: FunctionComponent<Rows1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rows, className].join(" ")}>
      <div className={styles.tableBodyContainer}>
        <div className={styles.tableRowItems}>
          <p className={styles.value}>
            <span className={styles.soupBaker}>{`Soup, Baker, `}</span>
            <span className={styles.saladChinese}>Salad, Chinese</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rows1;
