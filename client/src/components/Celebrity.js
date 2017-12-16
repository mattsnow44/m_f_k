import React from 'react'
// import { Card, Header, Image } from 'semantic-ui-react'
import { DragSource } from 'react-dnd'

class Celebrity extends React.Component {
  render() {
    const {
      celebrity,
      connectDragSource } = this.props
    // console.log(this.props)
    return connectDragSource(
      <div
        style={{
          height: '5rem',
          width: '5rem',
          backgroundColor: 'black',
          margin: '2rem',
          color: 'white'
        }}
        >
          <p>{celebrity.name}</p>
        {/* <Card>
          <Image src={celebrity.image}/>
          <Card.Content>
            <Card.Header>
              {celebrity.name}
            </Card.Header>
          </Card.Content>
        </Card> */}

      </div>
    )
  }
}


const ColorSource = {

  canDrag(props) {
    return !props.forbidDrag
  },

  beginDrag(props) {
    return {celebrityID: props.celebrity.id}
  },
}

// const ConnectAndMonitor = (connect, monitor) => {
//   return
//     {
//       connectDragSource: connect.dragSource(),
//       isDragging: monitor.isDragging()
//     }
// }


export default DragSource('celebrity', ColorSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(Celebrity)
