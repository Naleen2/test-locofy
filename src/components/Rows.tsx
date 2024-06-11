import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Rows.module.css";

export type RowsType = {
  className?: string;
  valGrubtechFood?: string;
  businessBayue?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
};

const Rows: FunctionComponent<RowsType> = ({
  className = "",
  valGrubtechFood,
  businessBayue,
  propHeight,
  propFlex,
  propPadding,
}) => {
  const rowsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  const tableBodyContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.rows, className].join(" ")} style={rowsStyle}>
      <div
        className={styles.tableBodyContainer}
        style={tableBodyContainerStyle}
      >
        <div className={styles.tableRowItems}>
          <p className={styles.value}>
            <span>
              <span className={styles.valgrubtechFood}>{valGrubtechFood}</span>
              <span className={styles.businessBayue}>{businessBayue}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rows;
