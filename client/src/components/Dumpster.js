import React from 'react'
import { DropTarget } from 'react-dnd'

class Dumpster extends React.Component {

  render() {
    const {
      title,
      celebrity,
      connectDropTarget
    } = this.props
    // console.log( 'Is over: ' + isOver +  ' Can Drop: ' + canDrop )
    // console.log(this.props)
    if (!!celebrity.id) {
      return connectDropTarget(
        <div style={{
          height: '12rem',
          width: '12rem',
          // padding: '2rem',
          // backgroundColor: 'black',
          backgroundImage: `url(${celebrity.image}`,
          textAlign: 'center',
          color: 'white',
          margin: '2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
        <div style={styles.title}>
          <span>{title}</span>
          {': '}
          <span>{celebrity.name}</span>
        </div>
        </div>
      )
    } else {
      return connectDropTarget(
        <div style={{
          height: '12rem',
          width: '12rem',
          padding: '2rem',
          border: '1px solid black',
          textAlign: 'center',
          margin: '2em',
        }}>
        <p>{title}</p>
      </div>
    )

    }
  }

}

const styles = {
  title: {
    width: '100%',
    backgroundColor: '#000000AA'
  }
}

const TargetFunction = {
	drop(props, monitor) {
		props.onDrop(monitor.getItemType(), props, monitor)
	},
}

export default DropTarget('celebrity', TargetFunction, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
	draggingColor: monitor.getItemType(),
}))(Dumpster)
