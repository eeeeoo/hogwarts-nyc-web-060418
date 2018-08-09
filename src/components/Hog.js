import React from 'react'

export default class Hog extends React.Component{
    state = {
        isClicked: false
    }

    handleClick = () => {
        if (this.state.isClicked === false){ this.setState({
            isClicked: true
        })}
        else {
            this.setState({
                isClicked: false
            })
        }
        
    }

    hogInfo = () => {

        if (this.state.isClicked === true){
            return ( <div className="content">
            <a className="header">{this.props.name}</a>
            <div className="meta">{this.props.specialty}</div>
            <div className="description">
                <span>{this.props.greased ? 'greased' : 'not greased'}</span>
                <br></br>
                <span>{this.props.medal} medal</span>
                <br></br>
                <span>weight: {this.props.weight}</span>
            </div>
            </div>
            )
        }
        else if (this.state.isClicked === false){
            return (<div className="image">
            <img src={this.props.image} alt="" />
        </div>)
        }

            
    }
    render(){
        return (
            <div onClick={this.handleClick} className="ui eight wide column card">
                {this.hogInfo()}
            </div>
        )
    }
}