import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const About = () => (
  <div id='about'>
      <Image src={require('../../public/main.jpg')} fluid disabled/>
    <Header color='violet' >
    About
    </Header>
  </div>
)

export default About