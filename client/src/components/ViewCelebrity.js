import React from 'react'
import { Card, Image, Modal, Button } from 'semantic-ui-react'
import axios from 'axios'

class ViewCelebrity extends React.Component{
  state = {celebrity: {}, open: false}

  close = () => this.setState({ open: false })

  componentDidMount(){
    axios.get(`api/celebrities/${this.props.id}.json`)
    .then( res => {
      this.setState({celebrity: res.data}) 
    })
  }

  render(){
    const {celebrity} = this.state
    if (celebrity)
    return(
      <Modal trigger={<Button>Show Stats</Button>} size="mini" onClose={this.close}>
        <Modal.Content>
          <Card>
            <Image src={celebrity.image} />
            <Card.Content>
              <Card.Header>
                {celebrity.name}
              </Card.Header>
              <Card.Meta>
                <b>Marry: </b>{celebrity.stats && celebrity.stats.marry}<br />
                <b>Fuck: </b>{celebrity.stats && celebrity.stats.fuck}<br />
                <b>Kill: </b>{celebrity.stats && celebrity.stats.kill}<br />
              </Card.Meta>
            </Card.Content>
          </Card>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ViewCelebrity