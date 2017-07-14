import React from 'react'
import AboutCard from './AboutCard'
import { Grid, Header } from 'semantic-ui-react'

//TODO: simplify this by maping each object
const About = () => (
	<div id='about'>
  		<Grid columns='equal'>
  			<Grid.Row style={{'marginTop': '40px'}}/>
  			<Grid.Row centered>
  				<Header as='h1' content='All Womens Hackathon' />
  			</Grid.Row>
  			<Grid.Row centered style={{'paddingTop': '0px'}}>
  				<Grid.Column textAlign='center' width={12}>
  				 WiCHacks is an all women 24-hour hackathon hosted by Women in 
  				 Computing at RIT. A hackathon is a collaborative programming 
  				 event in which participants create an app, website, game, or 
  				 other piece of software over the course of the event. 
  				 Hackathon participants can be female college (including non-RIT) 
  				 or high school students who are at least 16 years of age.
  				 This event is open to women of all skill levels: those who haven’t 
  				 programmed at all, women who have done some programming, and the best 
  				 women programmers out there. It will be a great day to learn, invent, 
  				 and create the future. 
  				 </Grid.Column>
  			</Grid.Row>
  			<Grid.Row>
    			<Grid.Column />
    			<Grid.Column width={5}>
      				<AboutCard 
      					icon='flask' 
      					header='Discover' 
      					paragraph="Learn about frameworks, data science, version control, and the newest API's top companies have to offer by attending tech talks given by our sponsors."
      				/>
    			</Grid.Column>
    			<Grid.Column />
    			<Grid.Column width={5}>
      				<AboutCard 
      					icon='code' 
      					header='Build' 
      					paragraph="Brainstorm, design, and prototype an application using any tech stack you want. Challenges and categories will be announced the day of."
      				/>
    			</Grid.Column>
    			<Grid.Column />
    		</Grid.Row>
    		<Grid.Row />
    		<Grid.Row>
    			<Grid.Column />
    			<Grid.Column width={5}>
      				<AboutCard 
      					icon='signal' 
      					header='Grow' 
      					paragraph="In 24hrs you'll learn new technologies, and win prizes. Personal projects and participating in Hackathons will look great on your resume."
      				/>
    			</Grid.Column>
    			<Grid.Column />
    			<Grid.Column width={5}>
      				<AboutCard 
      					icon='comments outline' 
      					header='Network' 
      					paragraph="Talk with recruiters from top tech companies about internships and full time opportunities. Check out our sponsors for this year."
      				/>
    			</Grid.Column>
    			<Grid.Column />
    		</Grid.Row>
    	</Grid>
    </div>
)

export default About