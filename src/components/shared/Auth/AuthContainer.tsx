// Styles
import styles from "./AuthContainer.module.css"

// SVG
import logo from "../../../assets/img/logo.svg"

interface Props {
    ilustration: {
        src: any,
        alt: string
    },

    children: JSX.Element
}

const AuthContainer: React.FC<Props> = ({ilustration, children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={logo} alt="<DevSkills />" className={styles.logo} />
        <img
          src={ilustration.src}
          alt={ilustration.alt}
          className={styles.ilustration}
        />
      </div>

      <div className={styles.content}>
        <img src={logo} alt="<DevSkills />" className={styles.logo_small} />

        {children}
      </div>
    </div>
  );
}

export default AuthContainer