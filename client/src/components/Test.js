import React, { Component } from 'react';
import ViewCelebrity from './ViewCelebrity'
import axios from 'axios'


class Test extends React.Component{
  state = {celebrity: ""}
  componentDidMount(){
    axios.get('api/celebrities/34')
    .then( res => {
      this.setState({celebrity: res.data}) 
    })
  }
  
  
  render(){
    return(
      <ViewCelebrity 
        celebrity={this.state.celebrity}
      />
    )
  }
}

export default Test