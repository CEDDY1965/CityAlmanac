import React from 'react';
//import ReactDOM from 'react-dom';
//Props are latitude,longitude,cityname
//static map key=AIzaSyD99FTO1I3PrzxnZdAXAiRR9bGY1hrwB6Y
//embed map key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI
export default class SelectMode extends React.Component{
   constructor(props) {
    super(props);
	this.state ={
		mode: "place",
	};
	this.onMapModeChanged = this.onMapModeChanged.bind(this);		
  };
  
  


onMapModeChanged(e) {
	this.props.updateMode(e.target.value);
}

RenderMode()
{
	const mode = this.props.mode;


	const modeSelect =	<div className={this.props.modeSelectClass} onChange={this.onMapModeChanged}>
							<h4>Select Mode:</h4>
								<input type='radio' name='mode' value='place' id="map_mode_place" checked={mode === "place"} /><label htmlFor="map_mode_place">Place </label>
							<input type='radio' name='mode' value='streetview' id="map_mode_streetview" checked={mode === "streetview"} /><label htmlFor="map_mode_streetview">Street View</label>
						</div>

	return(modeSelect);

}
  
 render(){
	let modeSelect = null;
	modeSelect = this.RenderMode();
    return(modeSelect);
   
  }
}