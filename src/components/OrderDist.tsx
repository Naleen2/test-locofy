import { FunctionComponent } from "react";
import styles from "./OrderDist.module.css";

export type OrderDistType = {
  className?: string;
};

const OrderDist: FunctionComponent<OrderDistType> = ({ className = "" }) => {
  return (
    <div className={[styles.orderDist, className].join(" ")}>
      <div className={styles.orderChart}>
        <div className={styles.chartContainer}>
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          <div className={styles.baseSearchboxParent}>
            <div className={styles.baseSearchbox}>
              <img
                className={styles.buildingBlocksIconLeft}
                alt=""
                src="/-building-blocks---icon-left@2x.png"
              />
              <div className={styles.buildingBlocksPrefix}>
                <div className={styles.value}>KG</div>
              </div>
              <input
                className={styles.buildingBlocksValueConta}
                placeholder="Search location"
                type="text"
              />
              <img
                className={styles.buildingBlocksIconRight}
                alt=""
                src="/-building-blocks---icon-right.svg"
              />
              <div className={styles.button}>
                <div className={styles.baseButton}>
                  <div className={styles.container}>
                    <img
                      className={styles.leftIcon}
                      alt=""
                      src="/left-icon.svg"
                    />
                    <div className={styles.loadingIcon}>
                      <div className={styles.loadingIconChild} />
                      <div className={styles.loadingIconItem} />
                      <div className={styles.loadingIconInner} />
                    </div>
                    <div className={styles.buildingBlocksLabel}>
                      <div className={styles.label}>Label</div>
                    </div>
                    <img
                      className={styles.rightIcon}
                      alt=""
                      src="/left-icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.baseButton1}>
              <img className={styles.minimizeIcon} alt="" src="/minimize.svg" />
            </div>
          </div>
          <div className={styles.baseSearchboxGroup}>
            <div className={styles.baseSearchbox1}>
              <img
                className={styles.buildingBlocksIconLeft1}
                alt=""
                src="/-building-blocks---icon-left-3@2x.png"
              />
              <div className={styles.buildingBlocksPrefix1}>
                <div className={styles.value1}>KG</div>
              </div>
              <div className={styles.buildingBlocksValueConta1}>
                <div className={styles.valueContainer}>
                  <div className={styles.buildingBlocksValue}>
                    <div className={styles.value2}>Search location</div>
                  </div>
                  <div className={styles.buildingBlocksCursorRigh}>
                    <div className={styles.buildingBlocksCursor} />
                  </div>
                  <div className={styles.buildingBlocksCursorLeft}>
                    <div className={styles.buildingBlocksCursor1} />
                  </div>
                </div>
                <div className={styles.buildingBlocksSuffix}>
                  <div className={styles.value3}>KG</div>
                </div>
                <img className={styles.buildingBlocksIcon} alt="" />
                <div className={styles.button1}>
                  <div className={styles.baseButton2}>
                    <div className={styles.container1}>
                      <img className={styles.leftIcon1} alt="" />
                      <div className={styles.loadingIcon1}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.loadingIconChild1} />
                        <div className={styles.loadingIconChild2} />
                      </div>
                      <div className={styles.buildingBlocksLabel1}>
                        <div className={styles.label1}>Label</div>
                      </div>
                      <img className={styles.rightIcon1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.buildingBlocksIconRight1} alt="" />
              <div className={styles.button2}>
                <div className={styles.baseButton3}>
                  <div className={styles.container2}>
                    <img className={styles.leftIcon2} alt="" />
                    <div className={styles.loadingIcon2}>
                      <div className={styles.loadingIconChild3} />
                      <div className={styles.loadingIconChild4} />
                      <div className={styles.loadingIconChild5} />
                    </div>
                    <div className={styles.buildingBlocksLabel2}>
                      <div className={styles.label2}>Label</div>
                    </div>
                    <img className={styles.rightIcon2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.baseButton4}>
              <div className={styles.container3}>
                <div className={styles.loadingIcon3}>
                  <div className={styles.loadingIconChild6} />
                  <div className={styles.loadingIconChild7} />
                  <div className={styles.loadingIconChild8} />
                </div>
                <img
                  className={styles.shape2Icon}
                  loading="lazy"
                  alt=""
                  src="/shape2@2x.png"
                />
                <img
                  className={styles.rightIcon3}
                  alt=""
                  src="/right-icon.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.baseButton5}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/line-5.svg"
                    />
                  </div>
                  <img className={styles.frameItem} alt="" src="/line-4.svg" />
                </div>
              </div>
              <div className={styles.dataPoint} />
              <b className={styles.b}>0</b>
            </div>
          </div>
        </div>
        <div className={styles.baseButton6}>
          <h1 className={styles.value4}>+</h1>
        </div>
      </div>
      <div className={styles.baseButtonWrapper}>
        <div className={styles.baseButton7}>
          <h1 className={styles.value5}>-</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderDist;
