import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };
  }

  componentDidMount () {
    // use a callback script tag on the DOM to avoid
    // need for Meetup's API Key

    // adds script tag on dom with a function that will populate another dom element with id=thedata
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = 'function receive(events) { ' +
      'console.log("all data", events.data);' + 
      'let name = events.data[0].name; ' +
      'document.getElementById("thedata").innerHTML=name}';
    document.body.appendChild(s);

    // adds script tag on dom with src pointing to meetup api url passing the name of the function 
    // created above
    const script = document.createElement("script");
    script.src = "http://api.meetup.com/Latinx-Tech-PDX/events?callback=receive";
    script.type = "application/javascript";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (<div id="thedata"></div>);
  }

}

export default Events
