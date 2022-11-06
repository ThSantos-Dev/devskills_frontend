import styles from './Container.module.css'

import Sidebar from "../Sidebar/Sidebar";
import Filter from "./../Filter/Filter"
;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Container = (props: Props) => {
  return (
    <div>
      <Sidebar />

      <main className={styles.container}>{props.children}</main>

      <Filter />
    </div>
  );
};

export default Container;
