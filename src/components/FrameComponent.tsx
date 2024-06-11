import { FunctionComponent, useCallback } from "react";
import SmallCard from "./SmallCard";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const onBrandTextClick = useCallback(() => {
    // Please sync "Frame 1171275505" to the project
  }, []);

  return (
    <div className={[styles.headerParent, className].join(" ")}>
      <div className={styles.header}>
        <nav className={styles.titleContainer}>
          <h1 className={styles.pageTitle}>Discover</h1>
          <div className={styles.headerActions}>
            <div className={styles.buttonLeft}>
              <div className={styles.baseButton}>
                <div className={styles.actionButtonContent}>
                  <div className={styles.container}>
                    <img className={styles.leftIcon} alt="" />
                    <div className={styles.loadingIcon}>
                      <div className={styles.loadingIconChild} />
                      <div className={styles.loadingIconItem} />
                      <div className={styles.loadingIconInner} />
                    </div>
                    <div className={styles.buildingBlocksLabel}>
                      <a className={styles.label}>Filter</a>
                    </div>
                    <img className={styles.rightIcon} alt="" />
                  </div>
                  <img
                    className={styles.chevronIcon}
                    alt=""
                    src="/chevron-11@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.searchbox}>
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
                  placeholder="Search restaurant"
                  type="text"
                />
                <img
                  className={styles.buildingBlocksIconRight}
                  alt=""
                  src="/-building-blocks---icon-right.svg"
                />
                <div className={styles.button}>
                  <div className={styles.baseButton1}>
                    <div className={styles.container1}>
                      <img
                        className={styles.leftIcon1}
                        alt=""
                        src="/left-icon.svg"
                      />
                      <div className={styles.loadingIcon1}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.loadingIconChild1} />
                        <div className={styles.loadingIconChild2} />
                      </div>
                      <div className={styles.buildingBlocksLabel1}>
                        <div className={styles.label1}>Label</div>
                      </div>
                      <img
                        className={styles.rightIcon1}
                        alt=""
                        src="/left-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonLeft1}>
            <div className={styles.baseButton2}>
              <div className={styles.container2}>
                <img
                  className={styles.leftIcon2}
                  alt=""
                  src="/left-icon1.svg"
                />
                <div className={styles.loadingIcon2}>
                  <div className={styles.loadingIconChild3} />
                  <div className={styles.loadingIconChild4} />
                  <div className={styles.loadingIconChild5} />
                </div>
                <div className={styles.buildingBlocksLabel2}>
                  <div className={styles.label2}>Label</div>
                </div>
                <img
                  className={styles.rightIcon2}
                  alt=""
                  src="/right-icon.svg"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.filtersWrapper}>
        <div className={styles.filters}>
          <div className={styles.filterItemsContainerWrapper}>
            <div className={styles.filterItemsContainer}>
              <div className={styles.filterItems}>
                <div className={styles.addressFilter}>
                  <div className={styles.filter}>
                    <div className={styles.addressInputContent}>
                      <img
                        className={styles.buildingBlocksIconLeft1}
                        loading="lazy"
                        alt=""
                        src="/-building-blocks---icon-left-1@2x.png"
                      />
                      <a className={styles.searchAddress}>Dubai</a>
                    </div>
                  </div>
                </div>
                <div className={styles.filterItemTypes}>
                  <div className={styles.filter1}>
                    <div className={styles.filterContent}>
                      <a className={styles.brand} onClick={onBrandTextClick}>
                        Brand
                      </a>
                      <img
                        className={styles.chevronIcon1}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.filterItemTypes1}>
                  <div className={styles.filter2}>
                    <div className={styles.cuisineParent}>
                      <a className={styles.cuisine}>Cuisine</a>
                      <img
                        className={styles.chevronIcon2}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.filterItemTypes2}>
                  <div className={styles.filter3}>
                    <div className={styles.categoryParent}>
                      <a className={styles.category}>Category</a>
                      <img
                        className={styles.chevronIcon3}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.filterItemTypes3}>
                  <div className={styles.filter4}>
                    <div className={styles.menuParent}>
                      <a className={styles.menu}>Menu</a>
                      <img
                        className={styles.chevronIcon4}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.filterItemTypes4}>
                  <div className={styles.filter5}>
                    <div className={styles.platformParent}>
                      <a className={styles.platform}>Platform</a>
                      <img
                        className={styles.chevronIcon5}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.filterItemTypes5}>
                  <div className={styles.filter6}>
                    <div className={styles.ratingParent}>
                      <a className={styles.rating}>Rating</a>
                      <img
                        className={styles.chevronIcon6}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.filterItemTypes6}>
                  <div className={styles.filter7}>
                    <div className={styles.promotionParent}>
                      <a className={styles.promotion}>Promotion</a>
                      <img
                        className={styles.chevronIcon7}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.refreshFilter}>
                  <div className={styles.filter8}>
                    <img
                      className={styles.rotateClockwiseIcon}
                      loading="lazy"
                      alt=""
                      src="/rotateclockwise@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.emptyFilter}>
                  <div className={styles.emptyFilterPlaceholder}>
                    <div className={styles.emptyFilterContainer}>
                      <div className={styles.emptyFilterContent} />
                    </div>
                  </div>
                </div>
                <div className={styles.filterWrapper}>
                  <div className={styles.filter9}>
                    <div className={styles.popularParent}>
                      <div className={styles.popular}>Popular</div>
                      <img
                        className={styles.chevronIcon8}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.filterContainer}>
                  <div className={styles.filter10}>
                    <div className={styles.promotionsParent}>
                      <div className={styles.promotions}>Promotions</div>
                      <img
                        className={styles.chevronIcon9}
                        alt=""
                        src="/chevron-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summaryCards}>
            <div className={styles.smallCard}>
              <div className={styles.content}>
                <div className={styles.contentContainer}>
                  <div className={styles.title}>Stores</div>
                  <div className={styles.value1}>
                    <div className={styles.aed}>AED</div>
                    <b className={styles.value2}>7,755</b>
                  </div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.button1}>
                  <div className={styles.baseButton3}>
                    <div className={styles.container3}>
                      <img
                        className={styles.leftIcon3}
                        alt=""
                        src="/left-icon1.svg"
                      />
                      <div className={styles.loadingIcon3}>
                        <div className={styles.loadingIconChild6} />
                        <div className={styles.loadingIconChild7} />
                        <div className={styles.loadingIconChild8} />
                      </div>
                      <div className={styles.buildingBlocksLabel3}>
                        <div className={styles.label3}>Label</div>
                      </div>
                      <img
                        className={styles.rightIcon3}
                        alt=""
                        src="/right-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SmallCard
              flatIcon="/flat-icon.svg"
              title="ITEMS"
              value="446,833"
            />
            <SmallCard
              flatIcon="/flat-icon1@2x.png"
              title="popular items"
              value="22,185"
              propMinWidth="77px"
            />
            <div className={styles.smallCard1}>
              <div className={styles.content1}>
                <img className={styles.flatIcon} alt="" src="/flat-icon2.svg" />
                <div className={styles.contentContainer1}>
                  <div className={styles.title1}>AVG RATING</div>
                  <div className={styles.value3}>
                    <div className={styles.aed1}>AED</div>
                    <b className={styles.value4}>4.34</b>
                  </div>
                </div>
              </div>
              <div className={styles.buttonContainer1}>
                <div className={styles.button2}>
                  <div className={styles.baseButton4}>
                    <div className={styles.container4}>
                      <img
                        className={styles.leftIcon4}
                        alt=""
                        src="/left-icon1.svg"
                      />
                      <div className={styles.loadingIcon4}>
                        <div className={styles.loadingIconChild9} />
                        <div className={styles.loadingIconChild10} />
                        <div className={styles.loadingIconChild11} />
                      </div>
                      <div className={styles.buildingBlocksLabel4}>
                        <div className={styles.label4}>Label</div>
                      </div>
                      <img
                        className={styles.rightIcon4}
                        alt=""
                        src="/right-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
