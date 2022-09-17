import React from 'react'
import {Link} from "react-router-dom"

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <Link to={"/register/company"}>Sou empresa</Link>
      <br/>
      <Link to={"/register/dev"}>Sou dev</Link>
    </div>
  )
}

export default Home