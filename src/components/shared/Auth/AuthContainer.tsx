// Styles
import styles from "./AuthContainer.module.css";

// SVG
import logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";

interface Props {
  position?: "center";
  ilustration: {
    src: any;
    alt: string;
  };

  children: JSX.Element | JSX.Element[];
}

const AuthContainer: React.FC<Props> = ({
  ilustration,
  position,
  children,
}) => {
  return (
    <div
      className={`${styles.container} ${
        position === "center" ? styles.center : ""
      }`}
    >
      <div className={styles.image}>
        <Link to="/">
          <img src={logo} alt="<DevSkills />" className={styles.logo} />
        </Link>
        <img
          src={ilustration.src}
          alt={ilustration.alt}
          className={styles.ilustration}
        />
      </div>

      <div className={styles.content}>
        <Link to="/">
          <img src={logo} alt="<DevSkills />" className={styles.logo_small} />
        </Link>

        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
