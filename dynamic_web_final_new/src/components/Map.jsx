import React, { Component } from 'react'
import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from "react-leaflet"
import trainlines from './../data/subway-lines.json'
import "leaflet/dist/leaflet.css"  //removing this will remove zoom in/out buttons
import cx from 'classnames'
import { renderToString } from 'react-dom/server';
import {useContext} from 'react'


class Map extends Component {
  

    //default line color, not actually used
    trainLineStyle = {
        color:"black"
    };

    //create custom popups and import train line images to use!

    //create link in popup to lead to website

   
    onEachLine = (trainline, layer) => {

        
        //const for trains with only one line on them
        //<div><Link to="/GLine">Click to Learn More</Link></div>

        const isGLine = trainline.properties.name === "G"; 

        const trainPopup_oneline = (<div>
            <h2>{`The ${trainline.properties.name} line`}</h2> 
            <a href={"https://new.mta.info/maps/subway-line-maps/" + trainline.properties.name + "-line"} target="_blank" rel="noreferrer"><button>Learn More</button></a>
            
             </div>)
            
            ;

       //const for trains with multiple lines on them
        const trainPopup_multipleline = (<div> 
            <h2>{`The ${trainline.properties.name} lines`} </h2> 
            <a href={"https://new.mta.info/maps/subway-line-maps/" + trainline.properties.name[0] + "-line"} target="_blank" rel="noreferrer"><button>Learn More</button></a>
            </div>);
        
        

        console.log(trainline.properties);

        //converts react components into HTML strings

        const onelineHTML = renderToString(trainPopup_oneline);
        const multiplelineHTML = renderToString(trainPopup_multipleline);

        
        if(trainline.properties.name.length === 1){
            layer.bindPopup(onelineHTML)
        }
        else{
            layer.bindPopup(multiplelineHTML)
        }
        
        layer.on('mouseover', () => layer.openPopup());
        layer.on('click', () => layer.closePopup());

        //setting each train line to their respective color on the MTA map
        if(trainline.properties.name =="G"){
            layer.setStyle({color:"#6cbe45"});
        }
        else if((trainline.properties.name.includes("A")) || (trainline.properties.name.includes("C")) || (trainline.properties.name.includes("E"))){
            layer.setStyle({color:"#0039a6"})
        }
        else if((trainline.properties.name.includes("B")) || (trainline.properties.name.includes("D"))|| (trainline.properties.name.includes("F")) || (trainline.properties.name.includes("M"))){
            layer.setStyle({color:"#ff6319"})
        }
        else if((trainline.properties.name.includes("N")) || (trainline.properties.name.includes("Q")) || (trainline.properties.name.includes("R")) || (trainline.properties.name.includes("W"))){
            layer.setStyle({color:"#fccc0a"})
        }
        else if((trainline.properties.name.includes("1")) || (trainline.properties.name.includes("2")) || (trainline.properties.name.includes("3"))){
            layer.setStyle({color:"#ee352e"})
        }
        else if((trainline.properties.name.includes("4")) || (trainline.properties.name.includes("5")) || (trainline.properties.name.includes("6"))){
            layer.setStyle({color:"#00933c"})
        }
        else if((trainline.properties.name.includes("J")) || (trainline.properties.name.includes("Z"))){
            layer.setStyle({color:"#996633"})
        }
        else if((trainline.properties.name.includes("L"))){
            layer.setStyle({color:"	#a7a9ac"})
        }
        else if((trainline.properties.name.includes("7"))){
            layer.setStyle({color:"#b933ad"})
        }
        else if((trainline.properties.name.includes("S"))){
            layer.setStyle({color:"#808183"})
        }
    };




    render(){

        return(
        <div>
            
            <h1 className="map-text-styled" style={{marginTop:"135px"}} > Explore the iconic NYC Subway Map.</h1>
            <h3 className="map-text-styled" style={{marginTop:"175px"}} > Hover over each line to learn more.</h3>

            
            <MapContainer zoomControl={false} style={{height:"60vh"}} zoom={11} center={[40.75,-74]} attributionControl={false}>
            
            
                <TileLayer attribution= '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"/>
                <GeoJSON style={this.trainLineStyle} data={trainlines.features} onEachFeature={this.onEachLine}/>
                {/*<GeoJSON data={trainstations.features}/>*/}
            </MapContainer>

           
            </div>);
    }

}

export default Map;


