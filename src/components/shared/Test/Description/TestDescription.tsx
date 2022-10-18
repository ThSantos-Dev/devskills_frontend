// Styles
import styles from './TestDescription.module.css'

// Icon
import { BsGithub } from 'react-icons/bs';

interface Props {}

const TestDescription = (props: Props) => {
  return (
    <div className={styles.description_container}>
      <input type="text" name="" value="Título da prova" />

      {/* <QuillEditor /> */}
      <textarea name="" id="" placeholder="Insira uma descrição"></textarea>

      <div className={styles.link_github}>
        <BsGithub />
        <input type="text" name="" placeholder="link do github" />
      </div>
    </div>
  );
}

export default TestDescription