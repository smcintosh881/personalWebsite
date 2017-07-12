import React from 'react'
import { Image, Header } from 'semantic-ui-react'

import './LandingPage.css'

const LandingPage = () => (
  <div>
    <Image src={require('../../public/main.jpg')} fluid disabled/>
    <Header color='violet' className='landingPageText'>
      IMAGINE. LEARN. CREATE.
    </Header>
  </div>
)

export default LandingPage