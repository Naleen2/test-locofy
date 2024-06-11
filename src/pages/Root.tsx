import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import Rows1 from "../components/Rows1";
import Rows from "../components/Rows";
import OrderDist from "../components/OrderDist";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  const onLabelText65Click = useCallback(() => {
    // Please sync "Frame 1171275485" to the project
  }, []);

  const onViewTextClick = useCallback(() => {
    // Please sync "Frame 1171275444" to the project
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.mainParent}>
        <div className={styles.main}>
          <div className={styles.sideMenu}>
            <div className={styles.baseSideMenu}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/logo.svg"
                />
                <div className={styles.divider} />
              </div>
              <div className={styles.menuContainer}>
                <div className={styles.home}>
                  <div className={styles.baseSideMenuItem}>
                    <div className={styles.homeParent}>
                      <img
                        className={styles.homeIcon}
                        loading="lazy"
                        alt=""
                        src="/home.svg"
                      />
                      <a className={styles.label}>Home</a>
                    </div>
                    <img
                      className={styles.chevronIcon}
                      alt=""
                      src="/chevron.svg"
                    />
                  </div>
                </div>
                <div className={styles.analytics}>
                  <div className={styles.sideMenuItem}>
                    <div className={styles.baseSideMenuItem1}>
                      <div className={styles.analyticsParent}>
                        <img
                          className={styles.analyticsIcon}
                          alt=""
                          src="/analytics.svg"
                        />
                        <a className={styles.label1}>Analytics</a>
                      </div>
                      <img
                        className={styles.chevronIcon1}
                        alt=""
                        src="/chevron1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem1}>
                    <div className={styles.baseSideMenuItem2}>
                      <div className={styles.followLine} />
                      <div className={styles.labelContainer}>
                        <div className={styles.label2}>Sales</div>
                      </div>
                      <img
                        className={styles.chevronIcon2}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem2}>
                    <div className={styles.baseSideMenuItem3}>
                      <div className={styles.followLine1} />
                      <div className={styles.labelContainer1}>
                        <div className={styles.label3}>Customers</div>
                      </div>
                      <img
                        className={styles.chevronIcon3}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem3}>
                    <div className={styles.baseSideMenuItem4}>
                      <div className={styles.followLine2} />
                      <div className={styles.labelContainer2}>
                        <div className={styles.label4}>Operation</div>
                      </div>
                      <img
                        className={styles.chevronIcon4}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem4}>
                    <div className={styles.baseSideMenuItem5}>
                      <div className={styles.followLine3} />
                      <div className={styles.labelContainer3}>
                        <div className={styles.label5}>Inventory</div>
                      </div>
                      <img
                        className={styles.chevronIcon5}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.analytics1}>
                  <div className={styles.sideMenuItem5}>
                    <div className={styles.baseSideMenuItem6}>
                      <div className={styles.chartDonutParent}>
                        <img
                          className={styles.chartDonutIcon}
                          alt=""
                          src="/chartdonut.svg"
                        />
                        <div className={styles.realTimeReports}>
                          Real time reports
                        </div>
                      </div>
                      <img
                        className={styles.chevronIcon6}
                        alt=""
                        src="/chevron1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem6}>
                    <div className={styles.baseSideMenuItem7}>
                      <div className={styles.followLine4} />
                      <div className={styles.labelContainer4}>
                        <div className={styles.label6}>Sales</div>
                      </div>
                      <img
                        className={styles.chevronIcon7}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem7}>
                    <div className={styles.baseSideMenuItem8}>
                      <div className={styles.followLine5} />
                      <div className={styles.labelContainer5}>
                        <div className={styles.label7}>Customers</div>
                      </div>
                      <img
                        className={styles.chevronIcon8}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem8}>
                    <div className={styles.baseSideMenuItem9}>
                      <div className={styles.followLine6} />
                      <div className={styles.labelContainer6}>
                        <div className={styles.label8}>Operation</div>
                      </div>
                      <img
                        className={styles.chevronIcon9}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem9}>
                    <div className={styles.baseSideMenuItem10}>
                      <div className={styles.followLine7} />
                      <div className={styles.labelContainer7}>
                        <div className={styles.label9}>Inventory</div>
                      </div>
                      <img
                        className={styles.chevronIcon10}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.reports}>
                  <div className={styles.sideMenuItem10}>
                    <div className={styles.baseSideMenuItem11}>
                      <div className={styles.pieChartParent}>
                        <img
                          className={styles.pieChartIcon}
                          alt=""
                          src="/pie-chart.svg"
                        />
                        <div className={styles.label10}>Reports</div>
                      </div>
                      <img
                        className={styles.chevronIcon11}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem11}>
                    <div className={styles.baseSideMenuItem12}>
                      <div className={styles.followLine8} />
                      <div className={styles.labelContainer8}>
                        <div className={styles.label11}>Sales</div>
                      </div>
                      <img
                        className={styles.chevronIcon12}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem12}>
                    <div className={styles.baseSideMenuItem13}>
                      <div className={styles.followLine9} />
                      <div className={styles.labelContainer9}>
                        <div className={styles.label12}>Locations</div>
                      </div>
                      <img
                        className={styles.chevronIcon13}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem13}>
                    <div className={styles.baseSideMenuItem14}>
                      <div className={styles.followLine10} />
                      <div className={styles.labelContainer10}>
                        <div className={styles.label13}>Recipe</div>
                      </div>
                      <img
                        className={styles.chevronIcon14}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem14}>
                    <div className={styles.baseSideMenuItem15}>
                      <div className={styles.followLine11} />
                      <div className={styles.labelContainer11}>
                        <div className={styles.label14}>Modifier</div>
                      </div>
                      <img
                        className={styles.chevronIcon15}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem15}>
                    <div className={styles.baseSideMenuItem16}>
                      <div className={styles.followLine12} />
                      <div className={styles.labelContainer12}>
                        <div className={styles.label15}>
                          Discounts Performance
                        </div>
                      </div>
                      <img
                        className={styles.chevronIcon16}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem16}>
                    <div className={styles.baseSideMenuItem17}>
                      <div className={styles.followLine13} />
                      <div className={styles.labelContainer13}>
                        <div className={styles.label16}>...</div>
                      </div>
                      <img
                        className={styles.chevronIcon17}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.menu}>
                  <div className={styles.sideMenuItem17}>
                    <div className={styles.baseSideMenuItem18}>
                      <div className={styles.menuParent}>
                        <img
                          className={styles.menuIcon}
                          alt=""
                          src="/menu.svg"
                        />
                        <div className={styles.label17}>Menu Management</div>
                      </div>
                      <img
                        className={styles.chevronIcon18}
                        alt=""
                        src="/chevron-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.inventory}>
                  <div className={styles.sideMenuItem18}>
                    <div className={styles.baseSideMenuItem19}>
                      <div className={styles.boxParent}>
                        <img className={styles.boxIcon} alt="" src="/box.svg" />
                        <a className={styles.label18}>Inventory</a>
                      </div>
                      <img
                        className={styles.chevronIcon19}
                        alt=""
                        src="/chevron1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem19}>
                    <div className={styles.baseSideMenuItem20}>
                      <div className={styles.followLine14} />
                      <div className={styles.labelContainer14}>
                        <div className={styles.label19}>Stock on Hand</div>
                      </div>
                      <img
                        className={styles.chevronIcon20}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem20}>
                    <div className={styles.baseSideMenuItem21}>
                      <div className={styles.followLine15} />
                      <div className={styles.labelContainer15}>
                        <div className={styles.label20}>Receiving</div>
                      </div>
                      <img
                        className={styles.chevronIcon21}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem21}>
                    <div className={styles.baseSideMenuItem22}>
                      <div className={styles.followLine16} />
                      <div className={styles.labelContainer16}>
                        <div className={styles.label21}>Purchase Order</div>
                      </div>
                      <img
                        className={styles.chevronIcon22}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem22}>
                    <div className={styles.baseSideMenuItem23}>
                      <div className={styles.followLine17} />
                      <div className={styles.labelContainer17}>
                        <div className={styles.label22}>Catalog</div>
                      </div>
                      <img
                        className={styles.chevronIcon23}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem23}>
                    <div className={styles.baseSideMenuItem24}>
                      <div className={styles.followLine18} />
                      <div className={styles.labelContainer18}>
                        <div className={styles.label23}>Cycle Count</div>
                      </div>
                      <img
                        className={styles.chevronIcon24}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem24}>
                    <div className={styles.baseSideMenuItem25}>
                      <div className={styles.followLine19} />
                      <div className={styles.labelContainer19}>
                        <div className={styles.label24}>Suppliers</div>
                      </div>
                      <img
                        className={styles.chevronIcon25}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.myApps}>
                  <div className={styles.sideMenuItem25}>
                    <div className={styles.baseSideMenuItem26}>
                      <div className={styles.airplayParent}>
                        <img
                          className={styles.airplayIcon}
                          alt=""
                          src="/airplay.svg"
                        />
                        <div className={styles.label25}>Applications</div>
                      </div>
                      <img className={styles.chevronIcon26} alt="" />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem26}>
                    <div className={styles.baseSideMenuItem27}>
                      <div className={styles.followLine20} />
                      <div className={styles.labelContainer20}>
                        <div className={styles.label26}>Zomato</div>
                      </div>
                      <img
                        className={styles.chevronIcon27}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem27}>
                    <div className={styles.baseSideMenuItem28}>
                      <div className={styles.followLine21} />
                      <div className={styles.labelContainer21}>
                        <div className={styles.label27}>Talabat</div>
                      </div>
                      <img
                        className={styles.chevronIcon28}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem28}>
                    <div className={styles.baseSideMenuItem29}>
                      <div className={styles.followLine22} />
                      <div className={styles.labelContainer22}>
                        <div className={styles.label28}>grubKDS</div>
                      </div>
                      <img
                        className={styles.chevronIcon29}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.marketing}>
                  <div className={styles.baseSideMenuItem30}>
                    <div className={styles.megaphoneParent}>
                      <img
                        className={styles.megaphoneIcon}
                        alt=""
                        src="/megaphone.svg"
                      />
                      <div className={styles.label29}>Marketing</div>
                    </div>
                    <img
                      className={styles.chevronIcon30}
                      alt=""
                      src="/chevron.svg"
                    />
                  </div>
                </div>
                <div className={styles.menu1}>
                  <div className={styles.sideMenuItem29}>
                    <div className={styles.baseSideMenuItem31}>
                      <div className={styles.settingItemContent}>
                        <img
                          className={styles.toolIcon}
                          alt=""
                          src="/tool.svg"
                        />
                        <div className={styles.optimizationManager}>
                          Optimization Manager
                        </div>
                      </div>
                      <img
                        className={styles.chevronIcon31}
                        alt=""
                        src="/chevron-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem30}>
                    <div className={styles.baseSideMenuItem32}>
                      <div className={styles.followLine23} />
                      <div className={styles.subMenuItemContent}>
                        <div className={styles.labelContainer23}>
                          <div className={styles.label30}>Discovery</div>
                        </div>
                      </div>
                      <img
                        className={styles.chevronIcon32}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem31}>
                    <div className={styles.baseSideMenuItem33}>
                      <div className={styles.followLine24} />
                      <div className={styles.labelContainerWrapper}>
                        <div className={styles.labelContainer24}>
                          <div
                            className={styles.label31}
                            onClick={onLabelText65Click}
                          >
                            Following
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.chevronIcon33}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.userManagement}>
                  <div className={styles.sideMenuItem32}>
                    <div className={styles.baseSideMenuItem34}>
                      <div className={styles.userParent}>
                        <img
                          className={styles.userIcon}
                          alt=""
                          src="/user.svg"
                        />
                        <div className={styles.label32}>User Management</div>
                      </div>
                      <img
                        className={styles.chevronIcon34}
                        alt=""
                        src="/chevron1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem33}>
                    <div className={styles.baseSideMenuItem35}>
                      <div className={styles.followLine25} />
                      <div className={styles.labelContainer25}>
                        <div className={styles.label33}>Users</div>
                      </div>
                      <img
                        className={styles.chevronIcon35}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem34}>
                    <div className={styles.baseSideMenuItem36}>
                      <div className={styles.followLine26} />
                      <div className={styles.labelContainer26}>
                        <div className={styles.label34}>Groups</div>
                      </div>
                      <img
                        className={styles.chevronIcon36}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem35}>
                    <div className={styles.baseSideMenuItem37}>
                      <div className={styles.followLine27} />
                      <div className={styles.labelContainer27}>
                        <div className={styles.label35}>Rules</div>
                      </div>
                      <img
                        className={styles.chevronIcon37}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.accountSettings}>
                  <div className={styles.sideMenuItem36}>
                    <div className={styles.baseSideMenuItem38}>
                      <div className={styles.gearParent}>
                        <img
                          className={styles.gearIcon}
                          alt=""
                          src="/gear.svg"
                        />
                        <div className={styles.label36}>Account Settings</div>
                      </div>
                      <img
                        className={styles.chevronIcon38}
                        alt=""
                        src="/chevron1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem37}>
                    <div className={styles.baseSideMenuItem39}>
                      <div className={styles.followLine28} />
                      <div className={styles.labelContainer28}>
                        <div className={styles.label37}>My Account</div>
                      </div>
                      <img
                        className={styles.chevronIcon39}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem38}>
                    <div className={styles.baseSideMenuItem40}>
                      <div className={styles.followLine29} />
                      <div className={styles.labelContainer29}>
                        <div className={styles.label38}>Brands</div>
                      </div>
                      <img
                        className={styles.chevronIcon40}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem39}>
                    <div className={styles.baseSideMenuItem41}>
                      <div className={styles.followLine30} />
                      <div className={styles.labelContainer30}>
                        <div className={styles.label39}>Kitchens</div>
                      </div>
                      <img
                        className={styles.chevronIcon41}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sideMenuItem40}>
                    <div className={styles.baseSideMenuItem42}>
                      <div className={styles.followLine31} />
                      <div className={styles.labelContainer31}>
                        <div className={styles.label40}>Stations</div>
                      </div>
                      <img
                        className={styles.chevronIcon42}
                        alt=""
                        src="/chevron.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.sideMenuItem41}>
                  <div className={styles.baseSideMenuItem43}>
                    <div className={styles.profileContent}>
                      <img
                        className={styles.image28Icon}
                        alt=""
                        src="/image-28@2x.png"
                      />
                      <div className={styles.unitedArabEmirates}>
                        United Arab Emirates
                      </div>
                    </div>
                    <img
                      className={styles.chevronIcon43}
                      alt=""
                      src="/chevron-9.svg"
                    />
                  </div>
                </div>
                <div className={styles.sideMenuItem42}>
                  <div className={styles.baseSideMenuItem44}>
                    <div className={styles.worldParent}>
                      <img
                        className={styles.worldIcon}
                        alt=""
                        src="/world.svg"
                      />
                      <div className={styles.label41}>EN</div>
                    </div>
                    <img
                      className={styles.chevronIcon44}
                      alt=""
                      src="/chevron-9.svg"
                    />
                  </div>
                </div>
                <div className={styles.profileDividerContainer}>
                  <div className={styles.divider1} />
                </div>
                <div className={styles.baseSideMenuItem45}>
                  <div className={styles.userCircleParent}>
                    <img
                      className={styles.userCircleIcon}
                      alt=""
                      src="/usercircle.svg"
                    />
                    <b className={styles.jonathanOleary}>Jonathan O’Leary</b>
                  </div>
                  <img
                    className={styles.logoutIcon}
                    loading="lazy"
                    alt=""
                    src="/logout.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceChild} />
      </div>
      <main className={styles.body}>
        <section className={styles.body1}>
          <FrameComponent />
          <form className={styles.tableParent}>
            <div className={styles.table}>
              <div className={styles.cardHeader}>
                <div className={styles.searchResults}>Search results</div>
                <button className={styles.button}>
                  <div className={styles.saveButton}>
                    <div className={styles.saveFollow}>{`Save & follow`}</div>
                  </div>
                </button>
              </div>
              <div className={styles.tableContent}>
                <div className={styles.section2BillingInformation}>
                  <div className={styles.section2BillingInformation1}>
                    <div className={styles.tableExp}>
                      <div className={styles.tableHeader}>
                        <div className={styles.topRows}>
                          <div className={styles.column}>
                            <div className={styles.tableHeaderCell}>
                              <div className={styles.frame}>
                                <div className={styles.value}>Value</div>
                              </div>
                            </div>
                            <div className={styles.rows}>
                              <div className={styles.tableBodyContainer}>
                                <div className={styles.tableRowItems}>
                                  <div className={styles.button1}>
                                    <div className={styles.baseButton}>
                                      <div className={styles.container}>
                                        <img
                                          className={styles.leftIcon}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon}>
                                          <div
                                            className={styles.loadingIconChild}
                                          />
                                          <div
                                            className={styles.loadingIconItem}
                                          />
                                          <div
                                            className={styles.loadingIconInner}
                                          />
                                        </div>
                                        <div
                                          className={styles.buildingBlocksLabel}
                                        >
                                          <div className={styles.label42}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows1}>
                              <div className={styles.tableBodyContainer1}>
                                <div className={styles.tableRowItems1}>
                                  <div className={styles.button2}>
                                    <div className={styles.baseButton1}>
                                      <input
                                        className={styles.container1}
                                        type="checkbox"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows2}>
                              <div className={styles.tableBodyContainer2}>
                                <div className={styles.tableRowItems2}>
                                  <div className={styles.button3}>
                                    <div className={styles.baseButton2}>
                                      <input
                                        className={styles.container2}
                                        type="checkbox"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column1}>
                            <div className={styles.tableHeaderCell1}>
                              <div className={styles.tableRowItems3}>
                                <div className={styles.checkAll}>
                                  <div className={styles.checkbox}>
                                    <div className={styles.baseCheckbox}>
                                      <input
                                        className={styles.shape}
                                        type="checkbox"
                                      />
                                      <div
                                        className={styles.baseCheckboxChild}
                                      />
                                    </div>
                                  </div>
                                  <img
                                    className={styles.chevronIcon45}
                                    alt=""
                                    src="/chevron-21@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows3}>
                              <div className={styles.tableBodyContainer3}>
                                <div className={styles.tableRowItems4}>
                                  <div className={styles.platformCheck}>
                                    <div className={styles.checkbox1}>
                                      <img
                                        className={styles.baseCheckbox1}
                                        loading="lazy"
                                        alt=""
                                        src="/-base---checkbox.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows4}>
                              <div className={styles.tableBodyContainer4}>
                                <div className={styles.tableRowItems5}>
                                  <div className={styles.tableRowItems6}>
                                    <input
                                      className={styles.frameInput}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows5}>
                              <div className={styles.tableBodyContainer5}>
                                <div className={styles.tableRowItems7}>
                                  <div className={styles.tableRowItems8}>
                                    <input
                                      className={styles.frameInput1}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column2}>
                            <div className={styles.tableHeaderCell2}>
                              <div className={styles.frame1}>
                                <div className={styles.value1}>IMAGE</div>
                              </div>
                            </div>
                            <div className={styles.rows6}>
                              <div className={styles.tableBodyContainer6}>
                                <div className={styles.tableRowItems9}>
                                  <img
                                    className={styles.firstRowIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows7}>
                              <div className={styles.tableBodyContainer7}>
                                <div className={styles.tableRowItems10}>
                                  <img
                                    className={styles.secondRowIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows8}>
                              <div className={styles.tableBodyContainer8}>
                                <div className={styles.tableRowItems11}>
                                  <img
                                    className={styles.thirdRowIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column3}>
                            <div className={styles.tableHeaderCell3}>
                              <div className={styles.frame2}>
                                <div className={styles.value2}>
                                  RESTAURANT NAME
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows9}>
                              <div className={styles.tableBodyContainer9}>
                                <div className={styles.tableRowItems12}>
                                  <div className={styles.value3}>
                                    KFC Business Bay
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows10}>
                              <div className={styles.tableBodyContainer10}>
                                <div className={styles.tableRowItems13}>
                                  <div className={styles.value4}>
                                    KFC Business Bay
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows11}>
                              <div className={styles.tableBodyContainer11}>
                                <div className={styles.tableRowItems14}>
                                  <div className={styles.value5}>
                                    KFC Business Bay
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column4}>
                            <div className={styles.tableHeaderCell4}>
                              <div className={styles.frame3}>
                                <div className={styles.value6}>CUISINE</div>
                              </div>
                            </div>
                            <div className={styles.rows12}>
                              <div className={styles.tableBodyContainer12}>
                                <div className={styles.tableRowItems15}>
                                  <div className={styles.value7}>
                                    <p
                                      className={styles.soupBaker}
                                    >{`Soup, Baker, `}</p>
                                    <p className={styles.saladChinese}>
                                      Salad, Chinese
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows13}>
                              <div className={styles.tableBodyContainer13}>
                                <div className={styles.tableRowItems16}>
                                  <div className={styles.value8}>
                                    <p
                                      className={styles.soupBaker1}
                                    >{`Soup, Baker, `}</p>
                                    <p className={styles.saladChinese1}>
                                      Salad, Chinese
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows14}>
                              <div className={styles.tableBodyContainer14}>
                                <div className={styles.tableRowItems17}>
                                  <div className={styles.value9}>
                                    <p
                                      className={styles.soupBaker2}
                                    >{`Soup, Baker, `}</p>
                                    <p className={styles.saladChinese2}>
                                      Salad, Chinese
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column5}>
                            <div className={styles.tableHeaderCell5}>
                              <div className={styles.frame4}>
                                <div className={styles.priceRange}>
                                  Price range
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows15}>
                              <div className={styles.tableBodyContainer15}>
                                <div className={styles.tableRowItems18}>
                                  <div className={styles.aed2140}>
                                    <span className={styles.aed}>AED</span>
                                    <span className={styles.span}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows16}>
                              <div className={styles.tableBodyContainer16}>
                                <div className={styles.tableRowItems19}>
                                  <div className={styles.aed21401}>
                                    <span className={styles.aed1}>AED</span>
                                    <span className={styles.span1}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows17}>
                              <div className={styles.tableBodyContainer17}>
                                <div className={styles.tableRowItems20}>
                                  <div className={styles.value10}>
                                    <span className={styles.aed2}>AED</span>
                                    <span className={styles.span2}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column6}>
                            <div className={styles.tableHeaderCell6}>
                              <div className={styles.frame5}>
                                <div className={styles.rating}>RATING</div>
                              </div>
                            </div>
                            <div className={styles.rows18}>
                              <div className={styles.tableBodyContainer18}>
                                <div className={styles.tableRowItems21}>
                                  <div className={styles.value11}>4.76</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows19}>
                              <div className={styles.tableBodyContainer19}>
                                <div className={styles.tableRowItems22}>
                                  <div className={styles.div}>4.76</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows20}>
                              <div className={styles.tableBodyContainer20}>
                                <div className={styles.tableRowItems23}>
                                  <div className={styles.value12}>4.76</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column7}>
                            <div className={styles.tableHeaderCell7}>
                              <div className={styles.frame6}>
                                <div className={styles.platforms}>
                                  Platforms
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows21}>
                              <div className={styles.tableBodyContainer21}>
                                <div className={styles.tableBodyContainerInner}>
                                  <div className={styles.frameParent}>
                                    <div className={styles.firstLogoWrapper}>
                                      <div className={styles.firstLogo}>
                                        <div className={styles.firstDelivery}>
                                          <img
                                            className={styles.logoIcon1}
                                            loading="lazy"
                                            alt=""
                                            src="/logo-1@2x.png"
                                          />
                                          <img
                                            className={styles.logoIcon2}
                                            loading="lazy"
                                            alt=""
                                            src="/logo-2@2x.png"
                                          />
                                        </div>
                                        <div className={styles.secondDelivery}>
                                          <img
                                            className={styles.logoIcon3}
                                            alt=""
                                            src="/logo-3@2x.png"
                                          />
                                          <div className={styles.div1}>+2</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.frameWrapper}>
                                      <div className={styles.frameContainer}>
                                        <div
                                          className={styles.followingWrapper}
                                        >
                                          <div className={styles.following}>
                                            Following
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows22}>
                              <div className={styles.rows23}>
                                <div className={styles.tableBodyContainer22}>
                                  <div
                                    className={styles.tableBodyContainerChild}
                                  >
                                    <div className={styles.frameGroup}>
                                      <div className={styles.logoParent}>
                                        <img
                                          className={styles.logoIcon4}
                                          loading="lazy"
                                          alt=""
                                          src="/logo-1@2x.png"
                                        />
                                        <img
                                          className={styles.logoIcon5}
                                          alt=""
                                          src="/logo-2@2x.png"
                                        />
                                      </div>
                                      <div className={styles.logoWrapper}>
                                        <img
                                          className={styles.logoIcon6}
                                          alt=""
                                          src="/logo-3@2x.png"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.tableBodyContainer23}>
                              <div className={styles.frameDiv}>
                                <div className={styles.frameWrapper1}>
                                  <div className={styles.frameParent1}>
                                    <div className={styles.logoGroup}>
                                      <img
                                        className={styles.logoIcon7}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-1@2x.png"
                                      />
                                      <img
                                        className={styles.logoIcon8}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-2@2x.png"
                                      />
                                    </div>
                                    <div className={styles.logoFrame}>
                                      <img
                                        className={styles.logoIcon9}
                                        alt=""
                                        src="/logo-3@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.topRows1}>
                          <div className={styles.column8}>
                            <div className={styles.tableHeaderCell8}>
                              <div className={styles.frame7}>
                                <div className={styles.value13}>Value</div>
                              </div>
                            </div>
                            <div className={styles.rows24}>
                              <div className={styles.tableBodyContainer24}>
                                <div className={styles.tableRowItems24}>
                                  <div className={styles.button4}>
                                    <div className={styles.baseButton3}>
                                      <div className={styles.container3}>
                                        <img
                                          className={styles.leftIcon1}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon1}>
                                          <div className={styles.ellipseDiv} />
                                          <div
                                            className={styles.loadingIconChild1}
                                          />
                                          <div
                                            className={styles.loadingIconChild2}
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel1
                                          }
                                        >
                                          <div className={styles.label43}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon1}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows25}>
                              <div className={styles.tableBodyContainer25}>
                                <div className={styles.tableRowItems25}>
                                  <div className={styles.button5}>
                                    <div className={styles.baseButton4}>
                                      <div className={styles.container4}>
                                        <img
                                          className={styles.leftIcon2}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon2}>
                                          <div
                                            className={styles.loadingIconChild3}
                                          />
                                          <div
                                            className={styles.loadingIconChild4}
                                          />
                                          <div
                                            className={styles.loadingIconChild5}
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel2
                                          }
                                        >
                                          <div className={styles.label44}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon2}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows26}>
                              <div className={styles.tableBodyContainer26}>
                                <div className={styles.tableRowItems26}>
                                  <div className={styles.button6}>
                                    <div className={styles.baseButton5}>
                                      <div className={styles.container5}>
                                        <img
                                          className={styles.leftIcon3}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon3}>
                                          <div
                                            className={styles.loadingIconChild6}
                                          />
                                          <div
                                            className={styles.loadingIconChild7}
                                          />
                                          <div
                                            className={styles.loadingIconChild8}
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel3
                                          }
                                        >
                                          <div className={styles.label45}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon3}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column9}>
                            <div className={styles.rows27}>
                              <div className={styles.tableBodyContainer27}>
                                <div className={styles.tableRowItems27}>
                                  <div className={styles.tableRowItems28}>
                                    <input
                                      className={styles.cell}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows28}>
                              <div className={styles.tableBodyContainer28}>
                                <div className={styles.tableRowItems29}>
                                  <div className={styles.tableRowItems30}>
                                    <input
                                      className={styles.cell1}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column10}>
                            <div className={styles.rows29}>
                              <div className={styles.tableBodyContainer29}>
                                <div className={styles.tableRowItems31}>
                                  <img
                                    className={styles.dividerIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows30}>
                              <div className={styles.tableBodyContainer30}>
                                <div className={styles.tableRowItems32}>
                                  <img
                                    className={styles.dividerIcon1}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <textarea
                            className={styles.column11}
                            placeholder="KFC Business Bay"
                            rows={6}
                            cols={8}
                          />
                          <div className={styles.column12}>
                            <div className={styles.rows31}>
                              <div className={styles.tableBodyContainer31}>
                                <div className={styles.tableRowItems33}>
                                  <div className={styles.value14}>
                                    <p
                                      className={styles.soupBaker3}
                                    >{`Soup, Baker, `}</p>
                                    <p className={styles.saladChinese3}>
                                      Salad, Chinese
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Rows1 />
                          </div>
                          <div className={styles.column13}>
                            <div className={styles.rows32}>
                              <div className={styles.tableBodyContainer32}>
                                <div className={styles.tableRowItems34}>
                                  <div className={styles.value15}>
                                    <span className={styles.aed3}>AED</span>
                                    <span className={styles.span3}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows33}>
                              <div className={styles.tableBodyContainer33}>
                                <div className={styles.tableRowItems35}>
                                  <div className={styles.value16}>
                                    <span className={styles.aed4}>AED</span>
                                    <span className={styles.span4}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column14}>
                            <div className={styles.rows34}>
                              <div className={styles.tableBodyContainer34}>
                                <div className={styles.tableRowItems36}>
                                  <div className={styles.value17}>4.76</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows35}>
                              <div className={styles.tableBodyContainer35}>
                                <div className={styles.tableRowItems37}>
                                  <div className={styles.value18}>4.76</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column15}>
                            <div className={styles.tableBodyContainer36}>
                              <div className={styles.item}>
                                <div className={styles.cell2}>
                                  <div className={styles.containerWrapper}>
                                    <div className={styles.container6}>
                                      <div className={styles.logos}>
                                        <div className={styles.pair}>
                                          <div className={styles.icons}>
                                            <img
                                              className={styles.logoIcon10}
                                              loading="lazy"
                                              alt=""
                                              src="/logo-1@2x.png"
                                            />
                                            <img
                                              className={styles.logoIcon11}
                                              loading="lazy"
                                              alt=""
                                              src="/logo-2@2x.png"
                                            />
                                          </div>
                                          <div className={styles.pair1}>
                                            <img
                                              className={styles.logoIcon12}
                                              alt=""
                                              src="/logo-3@2x.png"
                                            />
                                            <div className={styles.icon}>
                                              +2
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles.logos1}>
                                        <div className={styles.pair2}>
                                          <div className={styles.labels}>
                                            <div className={styles.unfollow}>
                                              Unfollow
                                            </div>
                                            <div
                                              className={styles.view}
                                              onClick={onViewTextClick}
                                            >
                                              View
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.tableBodyContainer37}>
                              <div className={styles.item1}>
                                <div className={styles.cell3}>
                                  <div className={styles.containerParent}>
                                    <div className={styles.container7}>
                                      <img
                                        className={styles.logoIcon13}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-1@2x.png"
                                      />
                                      <img
                                        className={styles.logoIcon14}
                                        alt=""
                                        src="/logo-2@2x.png"
                                      />
                                    </div>
                                    <div className={styles.logos2}>
                                      <img
                                        className={styles.logoIcon15}
                                        alt=""
                                        src="/logo-3@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.topRows2}>
                          <div className={styles.column16}>
                            <div className={styles.tableHeaderCell9}>
                              <div className={styles.frame8}>
                                <div className={styles.value19}>Value</div>
                              </div>
                            </div>
                            <div className={styles.rows36}>
                              <div className={styles.tableBodyContainer38}>
                                <div className={styles.tableRowItems38}>
                                  <div className={styles.button7}>
                                    <div className={styles.baseButton6}>
                                      <div className={styles.container8}>
                                        <img
                                          className={styles.leftIcon4}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon4}>
                                          <div
                                            className={styles.loadingIconChild9}
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild10
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild11
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel4
                                          }
                                        >
                                          <div className={styles.label46}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon4}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows37}>
                              <div className={styles.tableBodyContainer39}>
                                <div className={styles.tableRowItems39}>
                                  <div className={styles.button8}>
                                    <div className={styles.baseButton7}>
                                      <div className={styles.container9}>
                                        <img
                                          className={styles.leftIcon5}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon5}>
                                          <div
                                            className={
                                              styles.loadingIconChild12
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild13
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild14
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel5
                                          }
                                        >
                                          <div className={styles.label47}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon5}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows38}>
                              <div className={styles.tableBodyContainer40}>
                                <div className={styles.tableRowItems40}>
                                  <div className={styles.button9}>
                                    <div className={styles.baseButton8}>
                                      <div className={styles.container10}>
                                        <img
                                          className={styles.leftIcon6}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon6}>
                                          <div
                                            className={
                                              styles.loadingIconChild15
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild16
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild17
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel6
                                          }
                                        >
                                          <div className={styles.label48}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon6}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column17}>
                            <div className={styles.rows39}>
                              <div className={styles.tableBodyContainer41}>
                                <div className={styles.tableRowItems41}>
                                  <div className={styles.tableRowItems42}>
                                    <input
                                      className={styles.frameInput2}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows40}>
                              <div className={styles.tableBodyContainer42}>
                                <div className={styles.tableRowItems43}>
                                  <div className={styles.tableRowItems44}>
                                    <input
                                      className={styles.frameInput3}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column18}>
                            <div className={styles.rows41}>
                              <div className={styles.tableBodyContainer43}>
                                <div className={styles.tableRowItems45}>
                                  <img
                                    className={styles.tableRowItemsChild}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows42}>
                              <div className={styles.tableBodyContainer44}>
                                <div className={styles.tableRowItems46}>
                                  <img
                                    className={styles.tableRowItemsItem}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <textarea
                            className={styles.column19}
                            placeholder="KFC Business Bay"
                            rows={6}
                            cols={8}
                          />
                          <div className={styles.column20}>
                            <Rows1 />
                            <Rows1 />
                          </div>
                          <div className={styles.column21}>
                            <div className={styles.rows43}>
                              <div className={styles.tableBodyContainer45}>
                                <div className={styles.tableRowItems47}>
                                  <div className={styles.value20}>
                                    <span className={styles.aed5}>AED</span>
                                    <span className={styles.span5}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows44}>
                              <div className={styles.tableBodyContainer46}>
                                <div className={styles.tableRowItems48}>
                                  <div className={styles.value21}>
                                    <span className={styles.aed6}>AED</span>
                                    <span className={styles.span6}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column22}>
                            <div className={styles.rows45}>
                              <div className={styles.tableBodyContainer47}>
                                <div className={styles.tableRowItems49}>
                                  <div className={styles.value22}>4.76</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows46}>
                              <div className={styles.tableBodyContainer48}>
                                <div className={styles.tableRowItems50}>
                                  <div className={styles.value23}>4.76</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column23}>
                            <div className={styles.tableBodyContainer49}>
                              <div className={styles.tableBodyContainerInner1}>
                                <div className={styles.frameWrapper2}>
                                  <div className={styles.frameParent2}>
                                    <div className={styles.logoParent1}>
                                      <img
                                        className={styles.logoIcon16}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-1@2x.png"
                                      />
                                      <img
                                        className={styles.logoIcon17}
                                        alt=""
                                        src="/logo-2@2x.png"
                                      />
                                    </div>
                                    <div className={styles.logos3}>
                                      <img
                                        className={styles.logoIcon18}
                                        alt=""
                                        src="/logo-3@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows47}>
                              <div className={styles.tableBodyContainer50}>
                                <div
                                  className={styles.tableBodyContainerInner2}
                                >
                                  <div className={styles.frameParent3}>
                                    <div className={styles.logoParent2}>
                                      <img
                                        className={styles.logoIcon19}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-1@2x.png"
                                      />
                                      <img
                                        className={styles.logoIcon20}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-2@2x.png"
                                      />
                                    </div>
                                    <div className={styles.logoWrapper1}>
                                      <img
                                        className={styles.logoIcon21}
                                        alt=""
                                        src="/logo-3@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.topRows3}>
                          <div className={styles.column24}>
                            <div className={styles.tableHeaderCell10}>
                              <div className={styles.frame9}>
                                <div className={styles.value24}>Value</div>
                              </div>
                            </div>
                            <div className={styles.rows48}>
                              <div className={styles.tableBodyContainer51}>
                                <div className={styles.tableRowItems51}>
                                  <div className={styles.button10}>
                                    <div className={styles.baseButton9}>
                                      <div className={styles.container11}>
                                        <img
                                          className={styles.leftIcon7}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon7}>
                                          <div
                                            className={
                                              styles.loadingIconChild18
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild19
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild20
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel7
                                          }
                                        >
                                          <div className={styles.label49}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon7}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows49}>
                              <div className={styles.tableBodyContainer52}>
                                <div className={styles.tableRowItems52}>
                                  <div className={styles.button11}>
                                    <div className={styles.baseButton10}>
                                      <div className={styles.container12}>
                                        <img
                                          className={styles.leftIcon8}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon8}>
                                          <div
                                            className={
                                              styles.loadingIconChild21
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild22
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild23
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel8
                                          }
                                        >
                                          <div className={styles.label50}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon8}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows50}>
                              <div className={styles.tableBodyContainer53}>
                                <div className={styles.tableRowItems53}>
                                  <div className={styles.button12}>
                                    <div className={styles.baseButton11}>
                                      <div className={styles.container13}>
                                        <img
                                          className={styles.leftIcon9}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon9}>
                                          <div
                                            className={
                                              styles.loadingIconChild24
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild25
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild26
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel9
                                          }
                                        >
                                          <div className={styles.label51}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon9}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column25}>
                            <div className={styles.rows51}>
                              <div className={styles.tableBodyContainer54}>
                                <div className={styles.tableRowItems54}>
                                  <div className={styles.tableRowItems55}>
                                    <input
                                      className={styles.frameInput4}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows52}>
                              <div className={styles.tableBodyContainer55}>
                                <div className={styles.tableRowItems56}>
                                  <div className={styles.tableRowItems57}>
                                    <input
                                      className={styles.frameInput5}
                                      type="checkbox"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column26}>
                            <div className={styles.rows53}>
                              <div className={styles.tableBodyContainer56}>
                                <div className={styles.tableRowItems58}>
                                  <img
                                    className={styles.tableRowItemsInner}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows54}>
                              <div className={styles.tableBodyContainer57}>
                                <div className={styles.tableRowItems59}>
                                  <img
                                    className={styles.rectangleIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <textarea
                            className={styles.column27}
                            placeholder="KFC Business Bay"
                            rows={6}
                            cols={8}
                          />
                          <div className={styles.column28}>
                            <Rows1 />
                            <Rows1 />
                          </div>
                          <div className={styles.column29}>
                            <div className={styles.rows55}>
                              <div className={styles.tableBodyContainer58}>
                                <div className={styles.tableRowItems60}>
                                  <div className={styles.value25}>
                                    <span className={styles.aed7}>AED</span>
                                    <span className={styles.span7}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows56}>
                              <div className={styles.tableBodyContainer59}>
                                <div className={styles.tableRowItems61}>
                                  <div className={styles.value26}>
                                    <span className={styles.aed8}>AED</span>
                                    <span className={styles.span8}> 2-140</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column30}>
                            <div className={styles.rows57}>
                              <div className={styles.tableBodyContainer60}>
                                <div className={styles.tableRowItems62}>
                                  <div className={styles.value27}>4.76</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows58}>
                              <div className={styles.tableBodyContainer61}>
                                <div className={styles.tableRowItems63}>
                                  <div className={styles.value28}>4.76</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column31}>
                            <div className={styles.tableBodyContainer62}>
                              <div className={styles.tableBodyContainerInner3}>
                                <div className={styles.frameWrapper3}>
                                  <div className={styles.frameParent4}>
                                    <div className={styles.logoParent3}>
                                      <img
                                        className={styles.logoIcon22}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-1@2x.png"
                                      />
                                      <img
                                        className={styles.logoIcon23}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-2@2x.png"
                                      />
                                    </div>
                                    <div className={styles.logoWrapper2}>
                                      <img
                                        className={styles.logoIcon24}
                                        alt=""
                                        src="/logo-3@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.tableBodyContainer63}>
                              <div className={styles.tableBodyContainerInner4}>
                                <div className={styles.frameWrapper4}>
                                  <div className={styles.frameParent5}>
                                    <div className={styles.logoParent4}>
                                      <img
                                        className={styles.logoIcon25}
                                        loading="lazy"
                                        alt=""
                                        src="/logo-1@2x.png"
                                      />
                                      <img
                                        className={styles.logoIcon26}
                                        alt=""
                                        src="/logo-2@2x.png"
                                      />
                                    </div>
                                    <div className={styles.logoWrapper3}>
                                      <img
                                        className={styles.logoIcon27}
                                        alt=""
                                        src="/logo-3@2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.topRows4}>
                          <div className={styles.column32}>
                            <div className={styles.tableHeaderCell11}>
                              <div className={styles.frame10}>
                                <div className={styles.value29}>Value</div>
                              </div>
                            </div>
                            <div className={styles.rows59}>
                              <div className={styles.tableBodyContainer64}>
                                <div className={styles.tableRowItems64}>
                                  <div className={styles.button13}>
                                    <div className={styles.baseButton12}>
                                      <div className={styles.container14}>
                                        <img
                                          className={styles.leftIcon10}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon10}>
                                          <div
                                            className={
                                              styles.loadingIconChild27
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild28
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild29
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel10
                                          }
                                        >
                                          <div className={styles.label52}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon10}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows60}>
                              <div className={styles.tableBodyContainer65}>
                                <div className={styles.tableRowItems65}>
                                  <div className={styles.button14}>
                                    <div className={styles.baseButton13}>
                                      <div className={styles.container15}>
                                        <img
                                          className={styles.leftIcon11}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon11}>
                                          <div
                                            className={
                                              styles.loadingIconChild30
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild31
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild32
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel11
                                          }
                                        >
                                          <div className={styles.label53}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon11}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows61}>
                              <div className={styles.tableBodyContainer66}>
                                <div className={styles.tableRowItems66}>
                                  <div className={styles.button15}>
                                    <div className={styles.baseButton14}>
                                      <div className={styles.container16}>
                                        <img
                                          className={styles.leftIcon12}
                                          alt=""
                                          src="/left-icon-5.svg"
                                        />
                                        <div className={styles.loadingIcon12}>
                                          <div
                                            className={
                                              styles.loadingIconChild33
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild34
                                            }
                                          />
                                          <div
                                            className={
                                              styles.loadingIconChild35
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.buildingBlocksLabel12
                                          }
                                        >
                                          <div className={styles.label54}>
                                            Label
                                          </div>
                                        </div>
                                        <img
                                          className={styles.rightIcon12}
                                          alt=""
                                          src="/right-icon1.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column33}>
                            <div className={styles.rows62}>
                              <div className={styles.tableBodyContainer67}>
                                <div className={styles.tableRowItems67}>
                                  <div className={styles.tableRowItems68}>
                                    <div className={styles.checkboxParent}>
                                      <div className={styles.checkbox2}>
                                        <div className={styles.baseCheckbox2}>
                                          <div className={styles.shape1} />
                                        </div>
                                      </div>
                                      <div className={styles.content}> 10</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows63}>
                              <div className={styles.tableBodyContainer68}>
                                <div className={styles.tableRowItems69}>
                                  <div className={styles.tableRowItems70}>
                                    <div className={styles.checkboxGroup}>
                                      <div className={styles.checkbox3}>
                                        <div className={styles.baseCheckbox3}>
                                          <div className={styles.shape2} />
                                        </div>
                                      </div>
                                      <div className={styles.content1}> 11</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column34}>
                            <div className={styles.rows64}>
                              <div className={styles.tableBodyContainer69}>
                                <div className={styles.tableRowItems71}>
                                  <img
                                    className={styles.tableRowItemsChild1}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows65}>
                              <div className={styles.tableBodyContainer70}>
                                <div className={styles.tableRowItems72}>
                                  <img
                                    className={styles.tableRowItemsChild2}
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column35}>
                            <div className={styles.rows66}>
                              <div className={styles.tableBodyContainer71}>
                                <div className={styles.tableRowItems73}>
                                  <div className={styles.value30}>
                                    Chicken Fila{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows67}>
                              <div className={styles.tableBodyContainer72}>
                                <div className={styles.tableRowItems74}>
                                  <div className={styles.value31}>
                                    Chicken Fila{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column36}>
                            <Rows
                              valGrubtechFood="ValGrubtech Food"
                              businessBayue="Business Bayue"
                            />
                            <Rows
                              valGrubtechFood="VaGrubtech Food"
                              businessBayue="Business Baylue"
                              propHeight="60px"
                              propFlex="unset"
                              propPadding="0px 34px 0px var(--padding-xs)"
                            />
                          </div>
                          <div className={styles.column37}>
                            <Rows
                              valGrubtechFood="Soup, Baker, "
                              businessBayue="Salad, Chinese"
                              propHeight="unset"
                              propFlex="1"
                              propPadding="0px var(--padding-18xl) 0px var(--padding-xs)"
                            />
                            <Rows
                              valGrubtechFood="Soup, Baker, "
                              businessBayue="Salad, Chinese"
                              propHeight="unset"
                              propFlex="1"
                              propPadding="0px var(--padding-18xl) 0px var(--padding-xs)"
                            />
                          </div>
                          <div className={styles.column38}>
                            <div className={styles.rows68}>
                              <div className={styles.tableBodyContainer73}>
                                <div className={styles.tableRowItems75}>
                                  <div className={styles.value32}>4.76</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows69}>
                              <div className={styles.tableBodyContainer74}>
                                <div className={styles.tableRowItems76}>
                                  <div className={styles.value33}>4.76</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column39}>
                            <div className={styles.rows70}>
                              <div className={styles.tableBodyContainer75}>
                                <div className={styles.tableRowItems77}>
                                  <div className={styles.value34}>700</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows71}>
                              <div className={styles.tableBodyContainer76}>
                                <div className={styles.tableRowItems78}>
                                  <div className={styles.value35}>700</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.column40}>
                            <div className={styles.rows72}>
                              <div className={styles.tableBodyContainer77}>
                                <div className={styles.tableRowItems79}>
                                  <div className={styles.value36}>700</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rows73}>
                              <div className={styles.tableBodyContainer78}>
                                <div className={styles.tableRowItems80}>
                                  <div className={styles.value37}>700</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tablePagination}>
                        <div className={styles.rowperpage}>
                          <div className={styles.rowsPerPage}>
                            Rows per page:
                          </div>
                          <div className={styles.inputField}>
                            <div className={styles.baseInputField}>
                              <div className={styles.container17}>
                                <img
                                  className={styles.buildingBlocksIconLeft}
                                  alt=""
                                  src="/-building-blocks---icon-left.svg"
                                />
                                <div className={styles.buildingBlocksPrefix}>
                                  <div className={styles.value38}>KG</div>
                                </div>
                                <div className={styles.labelContainer32}>
                                  <div className={styles.buildingBlocksLabel13}>
                                    <div className={styles.label55}>10</div>
                                  </div>
                                  <div
                                    className={styles.buildingBlocksValueConta}
                                  >
                                    <div className={styles.valueContainer}>
                                      <div
                                        className={styles.buildingBlocksValue}
                                      >
                                        <div className={styles.value39}>10</div>
                                      </div>
                                      <div
                                        className={
                                          styles.buildingBlocksCursorRigh
                                        }
                                      >
                                        <div
                                          className={
                                            styles.buildingBlocksCursor
                                          }
                                        />
                                      </div>
                                      <div
                                        className={
                                          styles.buildingBlocksCursorLeft
                                        }
                                      >
                                        <div
                                          className={
                                            styles.buildingBlocksCursor1
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={styles.buildingBlocksSuffix}
                                    >
                                      <div className={styles.value40}>KG</div>
                                    </div>
                                    <img
                                      className={styles.buildingBlocksIcon}
                                      alt=""
                                      src="/-building-blocks---icon.svg"
                                    />
                                    <div className={styles.button16}>
                                      <div className={styles.baseButton15}>
                                        <div className={styles.container18}>
                                          <img
                                            className={styles.leftIcon13}
                                            alt=""
                                            src="/right-icon1.svg"
                                          />
                                          <div className={styles.loadingIcon13}>
                                            <div
                                              className={
                                                styles.loadingIconChild36
                                              }
                                            />
                                            <div
                                              className={
                                                styles.loadingIconChild37
                                              }
                                            />
                                            <div
                                              className={
                                                styles.loadingIconChild38
                                              }
                                            />
                                          </div>
                                          <div
                                            className={
                                              styles.buildingBlocksLabel14
                                            }
                                          >
                                            <div className={styles.label56}>
                                              Label
                                            </div>
                                          </div>
                                          <img
                                            className={styles.rightIcon13}
                                            alt=""
                                            src="/right-icon1.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <input
                                  className={styles.chevron}
                                  type="checkbox"
                                />
                              </div>
                              <div className={styles.buildingBlocksHelperText}>
                                <div className={styles.helperText}>
                                  Helper text
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.paging}>
                          <div className={styles.button17}>
                            <div className={styles.baseButton16}>
                              <div className={styles.container19}>
                                <img
                                  className={styles.leftIcon14}
                                  alt=""
                                  src="/left-icon-20.svg"
                                />
                                <div className={styles.loadingIcon14}>
                                  <div className={styles.loadingIconChild39} />
                                  <div className={styles.loadingIconChild40} />
                                  <div className={styles.loadingIconChild41} />
                                </div>
                                <div className={styles.buildingBlocksLabel15}>
                                  <div className={styles.label57}>Label</div>
                                </div>
                                <img
                                  className={styles.rightIcon14}
                                  alt=""
                                  src="/right-icon1.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.of15}>1-10 of 15</div>
                          <div className={styles.button18}>
                            <div className={styles.baseButton17}>
                              <div className={styles.container20}>
                                <img
                                  className={styles.leftIcon15}
                                  alt=""
                                  src="/left-icon-21.svg"
                                />
                                <div className={styles.loadingIcon15}>
                                  <div className={styles.loadingIconChild42} />
                                  <div className={styles.loadingIconChild43} />
                                  <div className={styles.loadingIconChild44} />
                                </div>
                                <div className={styles.buildingBlocksLabel16}>
                                  <div className={styles.label58}>Label</div>
                                </div>
                                <img
                                  className={styles.rightIcon15}
                                  alt=""
                                  src="/right-icon2.svg"
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
            </div>
            <OrderDist />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Root;
