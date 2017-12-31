/**1963
* google maps api key AIzaSyD99FTO1I3PrzxnZdAXAiRR9bGY1hrwB6Y 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoogleMap from './Map/GoogleMap.js';
import People from './People/People.js';
import Weather from './Weather/Weather.js';


//-----    Begin CityAlmanac constructor    --------------------  
class CityAlmanac extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
	  latitude: undefined,
	  longitude: undefined
    };
  };
  //static defaultProps = {
  // city: 'Sacramento',
  //};
//-----    End CityAlmanac Constructior()    --------------------  

  
//-----    Begin getCoords()    --------------------  
  getCoords = (city) => {
    const main = this;
    let query = null;
	
	console.log(process.env.NODE_ENV);
  
    main.setState({
        infoStatus: 'loading'
    });
    if (!city || city === '') {
      query = this.props.city;
    } else {
      query = city;
    }  
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=e949d70b2f804223b7ebdcf1e73fd933`)
    .then( function(response) {
      return response;
    })
    .then( function(response) {
      return response.json();
    })
    .then( function(data) {
		if(data.sys){
			main.setState({
				infoStatus: 'loaded',
				city: data.name,
				country: data.sys.country,
				latitude: data.coord.lat,
				longitude: data.coord.lon,
				});
		}
    })
    .catch( function(error) {
	  alert("e=" + error);
      main.setState({
        infoStatus: 'error'
      });
    })
  };
 
//-----    End getCoord()    --------------------  


//-----    Begin componentWillMount()    --------------------  
 componentWillMount() {
   // this.getCoords();
  };
  _handleSubmit = (event) => {
    event.preventDefault();
    this.getCoords(event.target.search.value);
  };
//-----    End componentWillMount()    --------------------  



//-----    Begin render()    --------------------    
render() {
    const { 
      city, 
      country,
 	  latitude,
	  longitude,
      infoStatus 
    } = this.state;
    
	let data = null;

	var message = "";
	
	if(city === undefined || city === "" || infoStatus === 'loading')
	{
		message= "Enter a city......";
		data = 
			<div>
				<img width='100%' height='100%' src="./city.jpg" alt="city drawing"/>
			</div>
	}

    else if (infoStatus === 'loaded') {
      data = 
	  <div className="weatherInfo">
		  <div className="row cityName">
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">{city} <span>({country})</span></div>
		  </div>
		  <Weather cityName={city} />
		  <GoogleMap city={city} latitude={latitude} longitude={longitude} />
		  <People  />
        </div>
    } else if (infoStatus === 'loading') {
      data = <div className="info loading">Loading data...</div>
    } else if (infoStatus === 'error') {
      data = <div className="info error">Error while loading data. Try again later.</div>
    }

	return (
		  <div className="weatherApp">
			<div className="row">
				<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" >
					&nbsp;
				</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
					{message}
				</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 weatherQuery">
				  <form onSubmit={this._handleSubmit}>
					<input 
					  type="text" 
					  name="search"
					  placeholder="Search a City..."
					/>
				  </form>
				<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
					&nbsp;
				</div>
				</div>
			</div>
			{data}
		  </div>
		);

};
//-----    End render()    --------------------    



}
      
ReactDOM.render(<CityAlmanac />, document.getElementById('root'));


