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
          height: '8rem',
          width: '8rem',
          padding: '2rem',
          backgroundColor: 'black',
          textAlign: 'center',
          color: 'white'
        }}>
          <p>{title}</p>
          <p>{celebrity.name}</p>
        </div>
      )
    } else {
      return connectDropTarget(
        <div style={{
          height: '8rem',
          width: '8rem',
          padding: '2rem',
          border: '1px solid black',
          textAlign: 'center',
        }}>
        <p>{title}</p>
      </div>
    )

    }
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
