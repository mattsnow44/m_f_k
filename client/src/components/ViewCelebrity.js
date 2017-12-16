import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class ViewCelebrity extends React.Component{

  render(){
    const {celebrity} = this.props
    debugger
    if (celebrity.name)
      return(
        <Card>
          <Image src={celebrity.image} />
          <Card.Content>
            <Card.Header>
              {celebrity.name}
            </Card.Header>
            <Card.Meta>
              <b>Marry: </b>{celebrity.stats.marry}
              <b>Fuck: </b>{celebrity.stats.fuck}
              <b>Kill: </b>{celebrity.stats.kill}
            </Card.Meta>
          </Card.Content>
        </Card>
      )
    else 
      return(
        "loading"
      )
  }
}

export default ViewCelebrity