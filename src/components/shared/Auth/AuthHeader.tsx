// Styles
import styles from "./AuthHeader.module.css";

interface Props {
  title: string;
  subtitle: string;
  children: JSX.Element | JSX.Element[];
}

const AuthHeader: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </header>
  );
};

export default AuthHeader;
