import React from 'react'
import { useSelector } from "react-redux";
import HeaderIlustration from "../../../assets/img/dev-home-illustration.svg";
import Container from '../../../components/shared/Layout/Container/Container'
import styles from './Home.module.css'

type Props = {}

const Home = (props: Props) => {

  const { user } = useSelector((state: any) => state.auth);

  return (
    <Container>

          <header>
          <div className={styles.text}>
            <h1>Bem-vindo, {user.name}!</h1>
            <p>
              Estamos muito felizes com sua chegada! Confira as mais novas provas da nossa plataforma ou continue suas provas em andamento. 
            </p>
          </div>
          <div className={styles.ilustration}>
            <img src={HeaderIlustration} alt="ilustração" />
          </div>
        </header>
        
    </Container>
  )
}

export default Home