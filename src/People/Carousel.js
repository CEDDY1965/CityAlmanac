import React from 'react';
import './carousel.css';

var Carousel = require('react-responsive-carousel').Carousel;

//-----    Begin class DemoCaraousel    --------------------   
export default class DemoCarousel extends React.Component{
//-----    Begin DemoCaraousel.render    --------------------   
    render() {
		var peopleImagesArray = this.props.people.map(person => person.LARGE_IMG)
		var elems = [];
		if(this.props.people.length === 3)
		for(var i = 0; i < peopleImagesArray.length;i++)
		{
			elems.push(<div key={i}>
                    <img alt="person" key={"img" + i} src={peopleImagesArray[i]} />
		<p className="legend">{this.props.people[i].FirstName + " " + this.props.people[i].LastName + "  DOB:" + this.props.people[i].DOB}</p>
                </div>)
		}

        return (
		<div>
            <Carousel showArrows={true}>
		
                {elems}
			
            </Carousel>
		</div>
        );
    }
//-----    End DemoCaraousel.render    --------------------   
}
//-----    End class DemoCaraousel    --------------------   
