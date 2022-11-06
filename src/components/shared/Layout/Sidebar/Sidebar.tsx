import { useLayoutEffect, useState } from "react";
import styles from "./Sidebar.module.css";

// Icons
import { BsBellFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdClass } from "react-icons/md";
import { RiFoldersFill } from "react-icons/ri";

interface Props {}

const Sidebar = (props: Props) => {
  // States de exibição
  const [sidebarClose, setSidebarClose] = useState<boolean>(true);
  const [modeText, setModeText] = useState<boolean>(true);

  const bodyEl = document.body;

  useLayoutEffect(() => bodyEl.classList.add(styles.dark), [bodyEl]);

  return (
    <div>
      <nav
        className={
          sidebarClose ? `${styles.sidebar} ${styles.close}` : styles.sidebar
        }
      >
        <header className={styles.header}>
          <div className={styles.image_text}>
            <span className={styles.image}>
              <img
                src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                alt=""
              />
            </span>

            <div className={`${styles.text} ${styles.logo_text}`}>
              <span className={styles.name}>Naruto Xurucrack</span>
              <span className={styles.profession}>@narutinho</span>
            </div>
          </div>

          <i
            className={`${styles.toggle} bx bx-chevron-right`}
            onClick={() => setSidebarClose(!sidebarClose)}
          ></i>
        </header>

        <div className={styles.menu_bar}>
          <div className={styles.menu}>
            <li
              className={styles.search_box}
              onClick={() => setSidebarClose(false)}
            >
              <i className={`${styles.icon} bx bx-search `}></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className={`${styles.icon} bx bx-home-alt `}></i>

                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Home
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  {/* <i className={`${styles.icon} bx bx-bar-chart-alt-2`}></i> */}
                  {/* <img
                    src={IFolder}
                    alt=""
                    className={`${styles.icon} bx bx-home-alt `}
                  /> */}
                  <div className={styles.icon}>
                    <RiFoldersFill />
                  </div>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Provas
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  {/* <i className={`${styles.icon} bx bx-bell`}></i> */}
                  <div className={styles.icon}>
                    <BsBellFill />
                  </div>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Notificações
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  {/* <i className={`${styles.icon} bx bx-pie-chart-alt`}></i> */}
                  <div className={styles.icon}>
                    <MdClass />
                  </div>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Testes
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className={`${styles.icon} bx bx-heart`}></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Favoritos
                  </span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  {/* <i className={`${styles.icon} bx bx-wallet`}></i> */}
                  <div className={styles.icon}>
                    <HiOutlineUserGroup />
                  </div>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Grupos
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.bottom_content}>
            <li className="">
              <a href="#">
                <i className={`${styles.icon} bx bx-log-out`}></i>
                <span className={`${styles.text} ${styles.nav_text}`}>
                  Logout
                </span>
              </a>
            </li>

            <li className={styles.mode}>
              <div className={styles.sun_moon}>
                <i className={`${styles.moon} ${styles.icon} bx bx-moon `}></i>
                <i className={`${styles.sun} ${styles.icon} bx bx-sun `}></i>
              </div>
              <span className={styles.text}>
                {modeText ? "Dark mode" : "Light mode"}
              </span>

              <div
                className={styles.toggle_switch}
                onClick={() => {
                  bodyEl.classList.toggle(styles.dark);
                  setModeText(!modeText);
                }}
              >
                <span className={styles.switch}></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      {/* <section className={styles.home}>
        <div className={styles.text}>Dashboard Sidebar</div>
      </section> */}
    </div>
  );
};

export default Sidebar;
