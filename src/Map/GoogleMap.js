import React from 'react';
import SelectMode from './SelectMode.jsx'
import SelectZoom from './SelectZoom.jsx'

//import ReactDOM from 'react-dom';
//Props are latitude,longitude,cityname
//static map key=AIzaSyD99FTO1I3PrzxnZdAXAiRR9bGY1hrwB6Y
//embed map key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI
export default class GoogleMap extends React.Component{
   constructor(props) {
    super(props);
	this.state ={
		mode: "place",
		zoom: "10"
	};
  };
  
  
  
setMode (mode_){
    this.setState({
      zoom: this.state.zoom,
	  mode: mode_
    })	
} 

setZoom (zoom_){
   this.setState({
      zoom: zoom_,
	  mode: this.state.mode
    })	
} 



RenderStatic()
{
	//------------------  Set up world/continent/city level imgs---------------------------------/
	const IMG_URL_0_EMBED = "https://www.google.com/maps/embed/v1/" + this.state.mode + "?key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI" + (this.state.mode === "place" ? "&zoom=0" : "") + "&" + (this.state.mode === "place" ? "q" : "location") + "=" + this.props.city;
	const IMG_URL_5_EMBED = "https://www.google.com/maps/embed/v1/" + this.state.mode + "?key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI" + (this.state.mode === "place" ? "&zoom=5" : "") + "&" + (this.state.mode === "place" ? "q" : "location") + "=" + this.props.city;
	const IMG_URL_10_EMBED = "https://www.google.com/maps/embed/v1/" + this.state.mode + "?key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI" + (this.state.mode === "place" ? "&zoom=10" : "") + "&" + (this.state.mode === "place" ? "q" : "location") + "=" + this.props.city;


	const IMG_URL_EMBED = "https://www.google.com/maps/embed/v1/" + this.state.mode + "?key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI" + (this.state.mode === "place" ? "&zoom=" + this.state.zoom : "") + "&" + (this.state.mode === "place" ? "q" : "location") + "=" + this.props.latitude + "," + this.props.longitude;
	
	const A_URL = "http://maps.google.com/?zoom=1&q=" + this.props.city;
	
	var tinyMaps = 	<div className="row">
						<iframe title="frame0" width="260" height="150" frameBorder="0" src={IMG_URL_0_EMBED} allowFullScreen/>
						<iframe title="frame5" width="260" height="150" frameBorder="0" src={IMG_URL_5_EMBED} />
						<iframe title="frame10" width="260" height="150" frameBorder="0" src={IMG_URL_10_EMBED} />
					</div>


	var modeSelectClass = "col-sm-4 bordered";	
	var zoomClass = "col-sm-6 bordered";
	
	if(this.state.mode === "streetview"){
		tinyMaps = ""
		zoomClass = "hidden";
		modeSelectClass = "col-sm-10 bordered";
	}

	const data = 
	        <div>
				<div className="row">
					<div className="col-sm-12 SectionTitle"> Geography </div>
					<div className="col-sm-2" id="child">Google Map</div>
					<div className="col-sm-10">
						
							{tinyMaps}
							<div className="row">
									<iframe title="frameEmbed" width="780" height={this.state.mode === "place" ? "324" : "474"} frameBorder="0" src={IMG_URL_EMBED} allowFullScreen></iframe>
							</div>
							<div className="row">
								<SelectZoom zoomClass={zoomClass} zoom={this.state.zoom} updateZoom={(zoom_) => this.setZoom(zoom_)} />
								<SelectMode modeSelectClass={modeSelectClass} mode={this.state.mode} updateMode={(mode_) => this.setMode(mode_)} />
							</div>
						
					</div>
					<div className="col-sm-2">
						&nbsp;
					</div>
					<div className="col-sm-10">
						<a href={A_URL}>Google Maps</a> {IMG_URL_EMBED}
					</div>
				</div>
			</div>

			return(data);

}
  
 render(){
	let dataMap = null;
	dataMap = this.RenderStatic();
    return(dataMap);
   
  }
}