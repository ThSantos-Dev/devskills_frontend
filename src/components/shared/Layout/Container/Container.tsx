import styles from "./Container.module.css";

import Sidebar from "../Sidebar/Sidebar";
import Filter from "./../Filter/Filter";

interface Props {
  filter?: boolean;
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<Props> = ({ filter = false, children }) => {
  return (
    <div>
      <Sidebar />

      <main className={styles.container}>{children}</main>

      {filter && <Filter />}
    </div>
  );
};

export default Container;
