import React from 'react'
import { Image, Header } from 'semantic-ui-react'

import './LandingPage.css'

const Landing = () => (
  <div id='landing'>
    <Image src={require('../../public/main.jpg')} fluid disabled/>
    <Header color='violet' className='landingPageText'>
    PLACE HOLDER TEXT
    </Header>
  </div>
)

export default Landing