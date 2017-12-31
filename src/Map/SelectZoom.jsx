import React from 'react';
//import ReactDOM from 'react-dom';
//Props are latitude,longitude,cityname
//static map key=AIzaSyD99FTO1I3PrzxnZdAXAiRR9bGY1hrwB6Y
//embed map key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI
export default class SelectZoom extends React.Component{
   constructor(props) {
    super(props);
	this.onMapZoomChanged = this.onMapZoomChanged.bind(this);		
  };
  
  


onMapZoomChanged(e) {
	this.props.updateZoom(e.target.value);
}

renderZoom()
{
	const zoom = this.props.zoom;
	
	var zoomSelect = 	<div className={this.props.zoomClass} onChange={this.onMapZoomChanged}>
							<h4>Select Zoom:</h4>
							<input type='radio' name='choices' value='0' id="map_place" checked={zoom === "0"} /><label htmlFor="map_place">World</label>
							<input type='radio' name='choices' value='5' id="map_directions" checked={zoom === "5"} /><label htmlFor="map_directions">Continent </label>
							<input type='radio' name='choices' value='10' id="map_search" checked={zoom === "10"} /><label htmlFor="map_search">City </label>
							<input type='radio' name='choices' value='15' id="map_view" checked={zoom === "15"} /><label htmlFor="map_view">Street </label>
							<input type='radio' name='choices' value='20' id="map_streetview" checked={zoom === "20"} /><label htmlFor="map_streetview">Building </label>
						</div>

	return(zoomSelect);

}
  
 render(){
	let zoomSelect = null;
	zoomSelect = this.renderZoom();
    return(zoomSelect);
   
  }
}