import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SmallCard.module.css";

export type SmallCardType = {
  className?: string;
  flatIcon?: string;
  title?: string;
  value?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const SmallCard: FunctionComponent<SmallCardType> = ({
  className = "",
  flatIcon,
  title,
  value,
  propMinWidth,
}) => {
  const valueStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.smallCard, className].join(" ")}>
      <div className={styles.content}>
        <img className={styles.flatIcon} alt="" src={flatIcon} />
        <div className={styles.contentContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.value}>
            <b className={styles.value1} style={valueStyle}>
              {value}
            </b>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <div className={styles.baseButton}>
            <div className={styles.container}>
              <img className={styles.leftIcon} alt="" src="/left-icon1.svg" />
              <div className={styles.loadingIcon}>
                <div className={styles.loadingIconChild} />
                <div className={styles.loadingIconItem} />
                <div className={styles.loadingIconInner} />
              </div>
              <div className={styles.buildingBlocksLabel}>
                <div className={styles.label}>Label</div>
              </div>
              <img className={styles.rightIcon} alt="" src="/right-icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
