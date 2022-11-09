import { useLayoutEffect, useState } from "react";
import styles from "./Sidebar.module.css";

// Icons
import { BiHomeAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdClass, MdFavoriteBorder } from "react-icons/md";
import { RiFoldersFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../../../../hooks/useAuth";

interface Props {}

const Sidebar = (props: Props) => {
  // States de exibição
  const [sidebarClose, setSidebarClose] = useState<boolean>(true);
  const [modeText, setModeText] = useState<boolean>(true);

  const { user } = useSelector((state: any) => state.auth);
  const { auth, type } = useAuth();

  // Configurando o menu que será exibido para cada um dos usuários
  const devNavegation = [
    { text: "Home", navigateTo: "/dev/home", icon: <BiHomeAlt /> },
    { text: "Provas", navigateTo: "/dev/tests", icon: <RiFoldersFill /> },
    {
      text: "Notificações",
      navigateTo: "/dev/notifications",
      icon: <BsBellFill />,
    },
    { text: "Testes", navigateTo: "/dev/exam", icon: <MdClass /> },
    { text: "Grupos", navigateTo: "/dev/groups", icon: <HiOutlineUserGroup /> },
    { text: "Salvos", navigateTo: "/dev/groups", icon: <MdFavoriteBorder /> },
  ];

  const companyNavegation = [
    { text: "Dashboard", navigateTo: "/company/home", icon: <BiHomeAlt /> },
    { text: "Provas", navigateTo: "/company/tests", icon: <RiFoldersFill /> },
    {
      text: "Notificações",
      navigateTo: "/company/notifications",
      icon: <BsBellFill />,
    },
    {
      text: "Grupos",
      navigateTo: "/company/groups",
      icon: <HiOutlineUserGroup />,
    },
  ];

  const bodyEl = document.body;

  useLayoutEffect(() => bodyEl.classList.add(styles.dark), [bodyEl]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) navigate("/company/login");

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
              <span className={styles.name}>{user?.name || ""}</span>
              {user.type === "DEV" && (
                <span className={styles.tag_name}>@narutinho</span>
              )}
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
              {type === "DEV" &&
                devNavegation.map((data, index) => (
                  <li key={index}>
                    <Link to={data.navigateTo}>
                      <div className={styles.icon}>{data.icon}</div>
                      <span className={`${styles.text} ${styles.nav_text}`}>
                        {data.text}
                      </span>
                    </Link>
                  </li>
                ))}

              {type === "COMPANY" &&
                companyNavegation.map((data, index) => (
                  <li key={index}>
                    <Link to={data.navigateTo}>
                      <div className={styles.icon}>{data.icon}</div>
                      <span className={`${styles.text} ${styles.nav_text}`}>
                        {data.text}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className={styles.bottom_content}>
            <li className="">
              <div onClick={logout} className={styles.logout}>
                <i className={`${styles.icon} bx bx-log-out`}></i>
                <span className={`${styles.text} ${styles.nav_text}`}>
                  Logout
                </span>
              </div>
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
    </div>
  );
};

export default Sidebar;
