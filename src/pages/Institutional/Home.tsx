import React from 'react'
import {Link} from "react-router-dom"

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <Link to={"/company/register"}>Sou empresa</Link>
      <br />
      <Link to={"/dev/register"}>Sou dev</Link>
    </div>
  );
}

export default Home