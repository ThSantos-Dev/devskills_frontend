import { useLayoutEffect, useState } from "react";
import styles from "./Sidebar.module.css";

// Icons
import { BiHomeAlt } from "react-icons/bi";
import { BsBellFill, BsFillBarChartLineFill } from "react-icons/bs";
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
  const { auth, type }: { auth: any; type: string } = useAuth();

  // Configurando o menu que será exibido para cada um dos usuários
  const devNavegation = [
    { text: "Home", navigateTo: "/dev/home", icon: <BiHomeAlt /> },
    { text: "Provas", navigateTo: "/dev/mytests", icon: <RiFoldersFill /> },
    {
      text: "Notificações",
      navigateTo: "/dev/notifications",
      icon: <BsBellFill />,
    },
    { text: "Testes", navigateTo: "/dev/exam", icon: <MdClass /> },
    {
      text: "Grupos",
      navigateTo: `/dev/groups/${user.id}`,
      icon: <HiOutlineUserGroup />,
    },
    { text: "Salvos", navigateTo: "/dev/groups", icon: <MdFavoriteBorder /> },
  ];

  const companyNavegation = [
    { text: "Dashboard", navigateTo: "/company/home", icon: <BiHomeAlt /> },
    {
      text: "Provas",
      navigateTo: "/company/mytests",
      icon: <RiFoldersFill />,
    },
    {
      text: "Ranking",
      navigateTo: "/company/ranking",
      icon: <BsFillBarChartLineFill />,
    },
    {
      text: "Grupos",
      navigateTo: "/company/mygroups",
      icon: <HiOutlineUserGroup />,
    },
  ];

  const bodyEl = document.body;

  useLayoutEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme")!) || null;
    console.log(theme);

    if (!theme || theme.value === "dark") {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", JSON.stringify({ value: "dark" }));
      bodyEl.classList.remove("light");
      return bodyEl.classList.add(styles.dark);
    }

    localStorage.setItem("theme", JSON.stringify({ value: "light" }));
    bodyEl.classList.add("light");
    bodyEl.classList.remove(styles.dark);
    setModeText(false);
  }, [bodyEl]);

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
          <div
            className={styles.image_text}
            onClick={() =>
              navigate(`/${type.toLowerCase()}/profile/${user.id}`)
            }
          >
            <span className={styles.image}>
              <img
                src={
                  type === "DEVELOPER"
                    ? user.profile_image
                      ? user.profile_image
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    : user.logo
                    ? user.logo
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
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
              {type === "DEVELOPER" &&
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
                  bodyEl.classList.toggle("light");

                  localStorage.removeItem("theme");

                  if (modeText) {
                    localStorage.setItem(
                      "theme",
                      JSON.stringify({ value: "light" })
                    );
                  } else {
                    localStorage.setItem(
                      "theme",
                      JSON.stringify({ value: "dark" })
                    );
                  }

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
