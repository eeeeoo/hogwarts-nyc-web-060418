import React from 'react'
import Hog from "./Hog"
export default class HogContainer extends React.Component{
    

    findImage = (pigName) => {
        const underscoredPigName = pigName.replace(/ /g, "_").toLowerCase()
        const imageURL =  "hog-imgs/" + underscoredPigName + ".jpg"
        return imageURL
    }
    mapHogs = () => {
        return this.props.hogs.map(hog=> {
            return <Hog key={hog.name} name={hog.name} image = {this.findImage(hog.name)} specialty={hog.specialty} greased={hog.greased} 
            weight = {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            medal = {hog['highest medal achieved']}
        />})
    }
    render(){
        return (
            <div className="ui grid container" >{this.mapHogs()}</div>
        )
    }
}