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
      <div style={styles.draggableContainer} >
        <div style={styles.title}>
          <p>{celebrity.name}</p>
        </div>
          <img src={celebrity.image} style={styles.image} />
      </div>
    )
  }
}

const styles = {
  draggableContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '12rem',
    width: '12rem',
    backgroundColor: 'black',
    margin: '2rem',
    color: 'white',
  },
  title: {
    display: 'flex',
    flex: 1
  },
  image: {
    height: '100%',
    width: '100%'
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
