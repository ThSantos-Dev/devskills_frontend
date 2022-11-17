import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import Container from '../../../components/shared/Layout/Container/Container'

type Props = {}

const ApplicationOverview = (props: Props) => {
  return (
    <Container
      filter={false}
      backTo="/company/mytests"
      title="Visão geral da prova"
    >
      <header>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pretium
            lorem porta laoreet sit. Id risus, erat at lacus non cursus
            convallis blandit et. Commodo scelerisque nulla ultricies cursus.
            Cursus tristique cras habitant tristique risus, et ac quisque.
          </p>

          <span><BsFillPersonFill />  500 candidatos</span>
        </div>
      </header>
    </Container>
  );
}

export default ApplicationOverview