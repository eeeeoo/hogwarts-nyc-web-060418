import React, { Component } from 'react'

export default class Form extends Component{

    state = {
        greasedOrNah: ""
    }

    handleSearch = (event) => {
        this.props.changeHogState(event.target.value)
    }

    render(){
        return(
            <form>
                <select onChange={this.handleSearch}>
                    <option value="true">greased up</option>
                    <option value="false">so clean</option>
                </select>
                
            </form>
        )
    }
}