import styles from './PagenationBar.module.css';

type Props = {
    page: number
    handlePage:(page: number) => void
}

const ButtonPagination = ({page, handlePage}: Props) => {
  return (
    <button onClick={() => handlePage(page)} className={styles.button}>
        {page}
    </button>
  )
}

export default ButtonPagination