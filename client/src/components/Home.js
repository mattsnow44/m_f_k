import React, { Component } from 'react';
import {
  Header,
  Card,
  Container,
  Image
} from 'semantic-ui-react';
import axios from 'axios';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

class Home extends Component {
  state = {celebrities: []}

  componentDidMount() {
    axios.get('/api/celebrities')
    .then(res => {
      this.setState({celebrities: res.data})
    })
  }

  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Card.Group itemsPerRow={3}>
          {this.state.celebrities.map( celebrity => {
            return(
              <Card>
                <Image src={celebrity.image}/>
                <Card.Content>
                  <Card.Header>
                    {celebrity.name}
                  </Card.Header>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </Container>
    );
  }
}

export default Home;
