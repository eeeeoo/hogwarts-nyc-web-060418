import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Form from './Form'

class App extends Component {
  state = {
    hogs: hogs
  } 

  changeHogState = (searchTerm) => {
    if (searchTerm === "true"){
      // const copyHogs =(this.setState({
      //   ...this.state, 

      // })
      const newHogs = this.state.hogs.filter(hog => hog.greased === true)
      this.setState({ hogs: newHogs}, () => (console.log(this.state.hogs)))
      
    }
    else if (searchTerm === "false"){
      const newHogs = this.state.hogs.filter(hog => hog.greased === false)
      console.log(newHogs)
    }
    
  }

  render() {
    return (

      <div className="App">
          < Nav />
          <Form changeHogState={this.changeHogState}/>
          <br></br>
          <br></br>
          < HogContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
