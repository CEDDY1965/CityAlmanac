import React from 'react';


//embed map key=AIzaSyDQQZBPlSD-f3g7j9YNN2DkjlWhGTMOnmI
export default class Weather extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      wind: undefined,
	  latitude: undefined,
	  longitude: undefined,
	 infoStatus: ""
    };
  };
  
  //-----    Begin getWeather()    --------------------  
  getWeather = (city) => {
    const main = this;
    let query = null;
    main.setState({
        infoStatus: 'loading'
    });
    if (!city || city === '') {
      query = this.props.cityName;
    } else {
      query = city;
    }  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=e949d70b2f804223b7ebdcf1e73fd933`)
    .then( function(response) {
      return response;
    })
    .then( function(response) {
      return response.json();
    })
    .then( function(data) {
      main.setState({
        infoStatus: 'loaded',
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
		latitude: data.coord.lat,
		longitude: data.coord.lon,
      });
    })
    .catch( function(error) {
      main.setState({
        infoStatus: 'error'
      });
    })
  };
 
//-----    End getWeather()    --------------------  


 componentWillMount() {
    this.getWeather(this.props.cityName);
  };
  
  
//-----    Begin render()    --------------------  
render() {
    const { 
      temperature, 
      humidity, 
      wind, 
      infoStatus 
    } = this.state;
    let data = null;

    if (infoStatus === 'loaded') {
      data = <div className="weatherInfo">
          <div className="row">
			<div className="col-sm-12 SectionTitle"> CurrentWeather</div>
            <div className="col-sm-2">Temperature</div><div className="col-sm-10">{temperature}&deg;</div>
            <div className="col-sm-2">Humidity</div><div className="col-sm-10">{humidity}%</div>
            <div className="col-sm-2">Wind</div><div className="col-sm-10">{wind}m/s</div>
          </div>
        </div>
		
    } else if (infoStatus === 'loading') {
      data = <div className="info loading">Loading weather data...</div>
    } else if (infoStatus === 'error') {
      data = <div className="info error">Error while loading weather data. Try again later.</div>
    }
	else{
		data = <div>waiting....</div>
	}
	return(data);
  }
}