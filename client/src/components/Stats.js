import React from 'react'
import { Header, Table, Image, Segment, Dimmer, Loader, Container, Button} from 'semantic-ui-react'
import axios from 'axios'


class Stats extends React.Component{
  state = {celebrities: [], query: "marry_id", loaded: false}

  componentDidMount(){
    this.runQuery()
  }

  filterButton = (query) => {
    this.setState({query}, () => {this.runQuery()})
  }

  runQuery = () => {
    axios.get(`/api/results/${this.state.query}`)
    .then(res => {      
      this.setState({celebrities: res.data, loaded: true})
    })
  }

  render(){

    if (!this.state.loaded)
      return(
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    else 
      return(
        <Container>
          <Header textAlign="center" style={{marginTop: "25px"}} >
            Sort By:<br />
            <Button.Group>
              <Button onClick={() => this.filterButton("marry_id")}>Marry</Button>
              <Button onClick={() => this.filterButton("fuck_id")}>Fuck</Button>
              <Button onClick={() => this.filterButton("kill_id")}>Kill</Button>
            </Button.Group>
          </Header>

          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Count</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.celebrities.map( celebrity => {
                return(
                  <Table.Row key={celebrity.celebrity.id}>
                    <Table.Cell><Image src={celebrity.celebrity.image} size='small' /></Table.Cell>
                    <Table.Cell>{celebrity.celebrity.name}</Table.Cell>
                    <Table.Cell>{celebrity.count}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </Container>
      )
  }

}

export default Stats
  