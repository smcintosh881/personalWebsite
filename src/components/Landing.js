import React from 'react'
import { Image, Header, Icon, Grid } from 'semantic-ui-react'

import './LandingPage.css'
//<Icon disabled name='angle right' fitted={true}/>
//    <Icon className='landingPageArrowButton' size='massive' name='angle double down' />

const Landing = () => (
  <div id='landing'>
    <Image src={require('../../public/landing.jpg')} fluid disabled/>
    <Grid>
    	<Grid.Column width={1}/>
    	<Grid.Row centered>
    		<Header className='extraLargeFont' color='violet'>
      			SHANNON MCINTOSH
    		</Header>
    	</Grid.Row>
    	<Grid.Row centered>
    		<Icon size='massive' name='angle down' color='violet' />
    	</Grid.Row>
    </Grid>
  </div>
)

export default Landing