import React, { Component, PropTypes } from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'

export default class AboutCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {icon, header, paragraph} = this.props
    return (
      <Segment compact textAlign='center'>
        <Icon name={icon} color='violet' size='big' />
        <Header as='h3' content={header} style={{'marginTop': '10px'}} color='violet' />
        <p>{paragraph}</p>
      </Segment>
    )
  }

}

AboutCard.propTypes = {
    icon: PropTypes.string,
    header: PropTypes.string,
    paragraph: PropTypes.string
};